// Imports
import React from 'react';
import positions from '../data/positions.json';
import { AppState } from '../redux/types';
import { useSelector } from 'react-redux';
import Container from './container';

// Functional component
const PositionDescription: React.FC = () => {
	// Get the currently-selected position's details
	const positionTitle = useSelector((state: AppState) => state.position);
	const position = positions.filter(
		(position) => position.title === positionTitle
	)[0];

	// Return JSX
	return <Container>{position.description}</Container>;
};

export default PositionDescription;
