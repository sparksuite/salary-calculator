// Imports
import {
	AppState,
	SET_POSITION,
	SET_DEPENDENTS,
	SET_TENURE,
	ChoiceTypes,
} from './types';

// Define initial state
const initialState: AppState = {
	position: 'Front End Engineer I',
	dependents: false,
	tenure: 'less than one year',
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
		case SET_DEPENDENTS:
			return {
				...state,
				dependents: action.value,
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
