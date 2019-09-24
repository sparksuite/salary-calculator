// Imports
import React from 'react';
import styled from 'styled-components/macro';
import positions from '../data/positions.json';
import { AppState } from '../redux/types';
import { useSelector } from 'react-redux';
import Container from './container';

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
