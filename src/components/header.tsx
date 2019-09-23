// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled title & subtitle
const Title = styled.div`
	margin-top: 3.5rem;
	color: #fff;
	font-family: Playfair Display, serif;
	font-weight: 700;
	font-size: 2.5rem;
`;

const Subtitle = styled.div`
	color: #fff;
	font-size: 1.25rem;
	font-style: italic;
`;

// Functional component
const Header: React.FC = () => {
	return (
		<React.Fragment>
			<Title>Sparksuiteʼs Salary Calculator</Title>
			<Subtitle>Transparent, predictable, &amp; holistic compensation</Subtitle>
		</React.Fragment>
	);
};

export default Header;
