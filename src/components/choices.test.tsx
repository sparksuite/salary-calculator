// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Choices from './choices';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('renders', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Choices />
		</Provider>,
		div
	);
});
