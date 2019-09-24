// Imports
import * as actions from './actions';

// The root reducer
export default function reducer(
	state = {
		position: 'Front End Engineer I',
		dependents: false,
		tenure: 'less than one year',
	},
	action
) {
	switch (action.type) {
		case actions.SET_POSITION:
			return {
				...state,
				position: action.value,
			};
		case actions.SET_DEPENDENTS:
			return {
				...state,
				dependents: action.value,
			};
		case actions.SET_TENURE:
			return {
				...state,
				tenure: action.value,
			};
		default:
			return state;
	}
}
