// Imports
import React from 'react';
import Choices from './choices';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Stories
export default {
	component: Choices,
	title: 'Choices',
};

export const normal = () => <Provider store={store}><Choices /></Provider>;
