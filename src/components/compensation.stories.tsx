// Imports
import React from 'react';
import Compensation from './compensation';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Stories
export default {
	component: Compensation,
	title: 'Compensation',
};

export const normal = () => (
	<Provider store={store}>
		<Compensation />
	</Provider>
);
