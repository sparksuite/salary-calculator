// Imports
import { SET_POSITION, SET_DEPENDENTS, SET_TENURE, ChoiceTypes } from './types'


// Set the position
export function setPosition(value: string): ChoiceTypes {
	return {
		type: SET_POSITION,
		value,
	};
}

// Set whether they have a spouse/dependents
export function setDependents(value: string): ChoiceTypes {
	return {
		type: SET_DEPENDENTS,
		value: value === 'do',
	};
}

// Set how long they've worked for Sparksuite
export function setTenure(value: string): ChoiceTypes {
	return {
		type: SET_TENURE,
		value,
	};
}
