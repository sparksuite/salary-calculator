// Imports
import React from 'react';
import styled from 'styled-components/macro';
import Choice from './choice';
import positions from '../data/positions.json';

// Styled container
const Container = styled.div`
	margin-top: 2rem;
	padding: 2rem;
	background: #8acc5e;
	background: linear-gradient(90deg, #afcc5e 0%, #8acc5e 100%);
	box-shadow: 0 1rem 3.125rem 0 rgba(0, 0, 0, 0.15);
	font-size: 1.25rem;
	font-weight: 500;
	line-height: 1.5;
	color: #fff;
	color: rgba(255, 255, 255, 0.9);
`;

// Functional component
const Choices: React.FC = () => {
	return (
		<Container>
			I am a&nbsp;&nbsp;
			<Choice choices={positions.map((position) => position.title)} />
			&nbsp;&nbsp;and, for health benefits, I&nbsp;&nbsp;
			<Choice choices={['donʼt', 'do']} />
			&nbsp;&nbsp; have a spouse/dependents. Iʼve been with Sparksuite
			for&nbsp;&nbsp;
			<Choice
				choices={[
					'less than one year',
					'one to two years',
					'two to three years',
					'three to four years',
					'more than four years',
				]}
			/>
		</Container>
	);
};

export default Choices;
