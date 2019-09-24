// Set the position
export const SET_POSITION = 'SET_POSITION';

export function setPosition(value) {
	return {
		type: SET_POSITION,
		value,
	};
}

// Set whether they have a spouse/dependents
export const SET_DEPENDENTS = 'SET_DEPENDENTS';

export function setDependents(value) {
	return {
		type: SET_DEPENDENTS,
		value: value === 'do',
	};
}

// Set how long they've worked for Sparksuite
export const SET_TENURE = 'SET_TENURE';

export function setTenure(value) {
	return {
		type: SET_TENURE,
		value,
	};
}
