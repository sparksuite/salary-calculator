// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled title & subtitle
const Title = styled.h1`
	margin: 0;
	padding: 0;
	margin-top: 3.5rem;
	color: #fff;
	font-family: Playfair Display, serif;
	font-weight: 700;
	font-size: 2.5rem;
	text-shadow: 0.1rem 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
	margin: 0;
	padding: 0;
	color: #fff;
	font-size: 1.25rem;
	font-style: italic;
	font-weight: 400;
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
