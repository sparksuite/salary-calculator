// Imports
import React from 'react';
import PositionDescription from './position-description';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Stories
export default {
	component: PositionDescription,
	title: 'Position description',
};

export const normal = () => (
	<Provider store={store}>
		<PositionDescription />
	</Provider>
);
