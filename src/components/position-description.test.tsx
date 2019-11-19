// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import PositionDescription from './position-description';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('renders', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<PositionDescription />
		</Provider>,
		div
	);
});
