// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled elements
const LineBox = styled.div`
	margin: 1rem 0;
	text-align: center;
	border-bottom: 2px solid #f2f2f2;
`;

const Text = styled.div`
	padding: 0 1rem;
	background: #fff;
	font-family: Neuton, serif;
	font-style: italic;
	font-size: 1.2em;
	color: #999;
	transform: translateY(50%);
	display: inline-block;
`;

// Define the component props
type Props = {
	text: string;
};

// Functional component
const Divider: React.FC<Props> = ({ text }) => {
	return (
		<LineBox>
			<Text>{text}</Text>
		</LineBox>
	);
};

export default Divider;
