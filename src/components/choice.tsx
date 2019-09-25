// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Initialize
const spaceBeforeIcon = 0.4;
const extraPaddingForClickEvents = 1.4;

// Styled components
const Wrapper = styled.div`
	margin-right: 0.5rem;
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
	margin: 0;
	padding: 0;

	/* Other styles */
	padding-right: ${extraPaddingForClickEvents}rem;
	cursor: pointer;
	text-overflow: ellipsis;
	max-width: 50vw;
`;

interface GroupedChoices {
	[key: string]: string[];
}

// Definition
type ChoiceProps = {
	choices: GroupedChoices | string[];
	onChange: Function;
	ariaLabel: string;
};

// Define a type guard
const isGrouped = (object: any): object is GroupedChoices => {
	return object[0] === undefined;
};

// Functional component
const Choices: React.FC<ChoiceProps> = ({ choices, onChange, ariaLabel }) => {
	return (
		<Wrapper>
			<Select
				onChange={(event) => onChange(event.target.value)}
				aria-label={ariaLabel}
			>
				{isGrouped(choices)
					? Object.keys(choices).map((groupName) => (
							<optgroup key={groupName} label={groupName}>
								{choices[groupName].map((choice) => (
									<option key={choice}>{choice}</option>
								))}
							</optgroup>
					  ))
					: choices.map((choice) => <option key={choice}>{choice}</option>)}
			</Select>
		</Wrapper>
	);
};

export default Choices;

// Export the type of choices prop
export type ChoicesProp = GroupedChoices | string[];
