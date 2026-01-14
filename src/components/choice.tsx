// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Initialize
const spaceBeforeIcon = 0.4;
const extraPaddingForClickEvents = 1.5;

// Styled components
const Wrapper = styled.div`
	margin-right: 0.5rem;
	font-weight: 600;
	border-bottom: 0.125rem solid rgba(0, 0, 0, 0.3);
	display: inline-block;
	transition: all 0.2s ease;
	line-height: 1.2;
	color: #000;

	&:hover {
		border-color: rgba(0, 0, 0, 0.7);
	}

	svg {
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
	overflow: hidden;
	white-space: nowrap;

	/* For Windows */
	option,
	optgroup {
		color: black;
	}

	option {
		font-weight: normal;
	}

	optgroup {
		font-weight: bold;
	}

	option:disabled {
		color: graytext;
	}
`;

// Define the component props
type Props = {
	onChange: Function;
	ariaLabel?: string;
	value?: string;
	defaultValue?: string;
};

// Functional component
const Choice: React.FC<Props> = ({
	onChange,
	ariaLabel,
	value,
	defaultValue,
	children,
}) => {
	return (
		<Wrapper>
			<Select
				onChange={(event) => onChange(event.target.value)}
				aria-label={ariaLabel}
				value={value}
				defaultValue={defaultValue}
			>
				{children}
			</Select>
			<i className='far fa-chevron-down fa-width-auto'></i>
		</Wrapper>
	);
};

export default Choice;
