// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled title & subtitle
const Title = styled.h1`
	margin: 0;
	padding: 0;
	margin-top: 3.5rem;
	margin-bottom: 0.1em;
	color: #000;
	font-family: Neuton, serif;
	font-weight: 400;
	font-size: 3.75em;
	line-height: 0.9;
	text-align: center;

	@media (max-width: 425px) {
		font-size: 3.25em;
	}
`;

const Subtitle = styled.h2`
	margin: 0.5em 0 0 0;
	padding: 0;
	color: #000;
	font-size: 1.5em;
	font-weight: 300;
	text-align: center;
`;

// Functional component
const Header: React.FC = () => {
	return (
		<header>
			<Title>Sparksuite’s Salary Calculator</Title>
			<Subtitle>Transparent, predictable, &amp; holistic compensation</Subtitle>
		</header>
	);
};

export default Header;
