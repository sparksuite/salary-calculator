// Imports
import React from 'react';
import styled from 'styled-components/macro';
import Choice, { ChoicesProp } from './choice';
import data from '../data.json';
import * as actions from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/types';

// Styled container
const Container = styled.div`
	margin-top: 2rem;
	padding: 1.5rem 2rem;
	background: #8acc5e;
	background: linear-gradient(90deg, #afcc5e 0%, #8acc5e 100%);
	box-shadow: 0 1rem 3.125rem 0 rgba(0, 0, 0, 0.15);
	font-size: 1.25rem;
	font-weight: 500;
	line-height: 1.75;
	color: #fff;
	color: rgba(255, 255, 255, 0.9);

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

const Text = styled.span`
	margin-right: 0.5rem;
`;

// Functional component
const Choices: React.FC = () => {
	// Use dispatch
	const dispatch = useDispatch();

	// Form an array of all position titles
	let positions: ChoicesProp = {};

	for (const field of data.fields) {
		positions[field.name] = [];

		for (const role of field.roles) {
			for (const level of role.levels) {
				positions[field.name].push(level.title);
			}
		}
	}

	// Get the currently-selected position's field descriptor and annual raises
	const selectedPosition = useSelector((state: AppState) => state.position);
	let fieldDescriptor = '';
	let annualRaises = [0];

	for (const field of data.fields) {
		for (const role of field.roles) {
			for (const level of role.levels) {
				if (level.title === selectedPosition) {
					fieldDescriptor = field.descriptor;
					annualRaises = level.annualRaises;
				}
			}
		}
	}

	// Determine available tenures
	let possibleExtraTenures = [
		'one to two years',
		'two to three years',
		'three to four years',
		'more than four years',
	];

	let tenures = ['less than one year'];

	for (let i = 0; i < annualRaises.length; i++) {
		tenures.push(possibleExtraTenures[i]);
	}

	// Reset tenure if currently-selected one is unavailable
	const selectedTenure = useSelector((state: AppState) => state.tenure);

	if (!tenures.includes(selectedTenure)) {
		dispatch(actions.setTenure(tenures[0]));
	}

	// Return JSX
	return (
		<Container>
			<Text>I am a</Text>
			<Choice
				choices={positions}
				onChange={(value: string) => dispatch(actions.setPosition(value))}
				ariaLabel='Position'
			/>
			<Text>and, for health benefits, I</Text>
			<Choice
				choices={['donʼt', 'do']}
				onChange={(value: string) => dispatch(actions.setDependents(value))}
				ariaLabel='Spouse or dependents'
			/>
			<Text>
				have a spouse / dependents. Iʼve been {fieldDescriptor} in the
				Sparksuite family for
			</Text>
			<Choice
				choices={tenures}
				onChange={(value: string) => dispatch(actions.setTenure(value))}
				ariaLabel='Tenure'
			/>
		</Container>
	);
};

export default Choices;
