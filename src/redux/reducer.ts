// Imports
import data from '../data.json';
import { AppState, SET_POSITION, SET_TENURE, ChoiceTypes } from './types';

// Define initial state
const initialState: AppState = {
	position: data.fields[0].roles[0].levels[0].title,
	tenure: data.tenures[0],
};

// The root reducer
export default function reducer(
	state = initialState,
	action: ChoiceTypes
): AppState {
	switch (action.type) {
		case SET_POSITION:
			return {
				...state,
				position: action.value,
			};
		case SET_TENURE:
			return {
				...state,
				tenure: action.value,
			};
		default:
			return state;
	}
}
