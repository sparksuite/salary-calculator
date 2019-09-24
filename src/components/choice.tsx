// Imports
import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';

// Initialize
const spaceBeforeIcon = 0.4;
const extraPaddingForClickEvents = 1.4;

// Styled components
const Wrapper = styled.div`
	font-weight: 700;
	border-bottom: 0.125rem solid rgba(255, 255, 255, 0.3);
	display: inline-block;
	transition: all 0.2s ease;
	line-height: 1.2;
	color: #fff;

	&:hover {
		border-color: rgba(255, 255, 255, 0.7);
	}

	&::after {
		content: '\f078';
		font-family: 'Font Awesome 5 Pro';
		font-weight: 400;
		font-size: 1rem;
		margin-left: -${extraPaddingForClickEvents - spaceBeforeIcon}rem;
		pointer-events: none;
	}
`;

const Select = styled.select`
	/* Clear browser styling */
	background: transparent;
	outline: none;
	appearance: none;
	border: none;
	font: inherit;
	color: inherit;
	border-radius: 0;

	/* Other styles */
	padding-right: ${extraPaddingForClickEvents}rem;
	cursor: pointer;
`;

// Definition
type ChoiceProps = {
	choices: string[];
	action: Function;
};

// Functional component
const Choices: React.FC<ChoiceProps> = (props) => {
	// Use dispatch
	const dispatch = useDispatch();

	// Return JSX
	return (
		<Wrapper>
			<Select onChange={(event) => dispatch(props.action(event.target.value))}>
				{props.choices.map((choice) => (
					<option key={choice}>{choice}</option>
				))}
			</Select>
		</Wrapper>
	);
};

export default Choices;
