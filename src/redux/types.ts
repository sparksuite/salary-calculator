// Export initial state interface
export interface AppState {
	position: string;
	dependents: boolean;
	tenure: string;
}

// Define types/interfaces for actions
export const SET_POSITION = 'SET_POSITION';
interface SetPositionAction {
	type: typeof SET_POSITION;
	value: string;
}

export const SET_DEPENDENTS = 'SET_DEPENDENTS';
interface SetDependentsAction {
	type: typeof SET_DEPENDENTS;
	value: boolean;
}

export const SET_TENURE = 'SET_TENURE';
interface SetTenureAction {
	type: typeof SET_TENURE;
	value: string;
}

// Export union type
export type ChoiceTypes =
	| SetPositionAction
	| SetDependentsAction
	| SetTenureAction;
