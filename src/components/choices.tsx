// Imports
import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Choice from './choice';
import data from '../data.json';
import * as actions from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/types';
import Container from './container';

// Styled container
const ModifiedContainer = styled(Container)`
	line-height: 1.75;
`;

const Text = styled.span`
	margin-right: 0.5rem;
`;

// Functional component
const Choices: React.FC = () => {
	// Use dispatch
	const dispatch = useDispatch();

	// Set the position if the corresponding search param is provided
	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const requestedPosition = searchParams.get('position');

		if (requestedPosition) {
			for (const field of data.fields) {
				for (const role of field.roles) {
					for (const level of role.levels) {
						if (level.title === requestedPosition) {
							dispatch(actions.setPosition(requestedPosition));
						}
					}
				}
			}
		}
	}, [dispatch]);

	// Form an array of all position titles
	let fields = [];

	for (const field of data.fields) {
		const group: { descriptor: string; positions: string[] } = {
			descriptor: field.name,
			positions: [],
		};

		for (const role of field.roles) {
			for (const level of role.levels) {
				group.positions.push(level.title);
			}
		}

		fields.push(group);
	}

	// Get the currently-selected position's field descriptor and annual raises
	const selectedPosition = useSelector((state: AppState) => state.position);
	let fieldDescriptor = '';
	let annualRaises = [0];

	for (const field of data.fields) {
		for (const role of field.roles) {
			for (const level of role.levels) {
				if (level.title === selectedPosition) {
					fieldDescriptor = `in ${field.name.toLowerCase()}`;
					annualRaises = level.annualRaises;
				}
			}
		}
	}

	// Build list of tenure choices
	let tenures = [];

	for (let tenure of data.tenures) {
		tenures.push({
			descriptor: tenure,
			disabled: false,
		});
	}

	for (let i = annualRaises.length + 1; i < tenures.length; i++) {
		tenures[i].disabled = true;
	}

	// Reset tenure if currently-selected one is unavailable
	const selectedTenure = useSelector((state: AppState) => state.tenure);

	if (
		!tenures
			.map((tenure) => (tenure.disabled ? null : tenure.descriptor))
			.includes(selectedTenure)
	) {
		dispatch(actions.setTenure(data.tenures[0]));
	}

	// Return JSX
	return (
		<ModifiedContainer>
			<Text>I am a</Text>
			<Choice
				onChange={(value: string) => dispatch(actions.setPosition(value))}
				ariaLabel='Position'
				value={selectedPosition}
				defaultValue='PLACEHOLDER'
			>
				<option disabled value={'PLACEHOLDER'}>
					select position…
				</option>

				{fields.map((field) => (
					<optgroup key={field.descriptor} label={field.descriptor}>
						{field.positions.map((position) => (
							<option key={position}>{position}</option>
						))}
					</optgroup>
				))}
			</Choice>
			<Text>
				and have worked {fieldDescriptor} in the Sparksuite family for
			</Text>
			<Choice
				onChange={(value: string) => dispatch(actions.setTenure(value))}
				ariaLabel='Tenure'
				value={selectedTenure}
			>
				{tenures.map((tenure) => (
					<option key={tenure.descriptor} disabled={tenure.disabled}>
						{tenure.descriptor}
					</option>
				))}
			</Choice>
		</ModifiedContainer>
	);
};

export default Choices;
