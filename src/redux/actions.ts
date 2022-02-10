// Imports
import { SET_POSITION, SET_TENURE, ChoiceTypes } from './types';

// Set the position
export function setPosition(value: string): ChoiceTypes {
	return {
		type: SET_POSITION,
		value,
	};
}

// Set how long they've worked for Sparksuite
export function setTenure(value: string): ChoiceTypes {
	return {
		type: SET_TENURE,
		value,
	};
}
