// Imports
import React from 'react';
import styled from 'styled-components/macro';
import positions from '../data/positions.json';
import { AppState } from '../redux/types';
import { useSelector } from 'react-redux';

// Styled container
const Container = styled.div`
	margin-top: 2rem;
	padding: 2rem;
	box-shadow: 0 1rem 3.125rem 0 rgba(0, 0, 0, 0.15);
	background: #fff;
	font-size: 1.125rem;
	line-height: 1.5rem;
	color: #4f4f4f;
`;

// Functional component
const PositionDescription: React.FC = () => {
	// Get the currently-selected position's title
	const positionTitle = useSelector((state: AppState) => state.position);

	// Return JSX
	return (
		<Container>
			{
				positions.filter((position) => position.title === positionTitle)[0]
					.description
			}
		</Container>
	);
};

export default PositionDescription;
