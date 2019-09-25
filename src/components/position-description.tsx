// Imports
import React from 'react';
import data from '../data.json';
import { AppState } from '../redux/types';
import { useSelector } from 'react-redux';
import Container from './container';

// Functional component
const PositionDescription: React.FC = () => {
	// Get the currently-selected position's details
	const selectedPosition = useSelector((state: AppState) => state.position);
	let positionDescription = '';

	for (const field of data.fields) {
		for (const role of field.roles) {
			for (const level of role.levels) {
				if (level.title === selectedPosition) {
					positionDescription = level.description;
				}
			}
		}
	}

	// Return JSX
	return <Container>{positionDescription}</Container>;
};

export default PositionDescription;
