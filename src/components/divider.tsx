// Imports
import React from 'react';
import styled from 'styled-components/macro';

// Styled elements
const LineBox = styled.div`
	margin: 1rem 0;
	text-align: center;
	border-bottom: 1px solid #f2f2f2;
`;

const Text = styled.div`
	padding: 0 1rem;
	background: #fff;
	font-family: Times New Roman, serif;
	font-style: italic;
	color: #a5a5a5;
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
