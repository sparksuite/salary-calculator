// Imports
import React from 'react';
import { render } from '@testing-library/react';
import PositionDescription from './position-description';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('Renders', () => {
	render(
		<Provider store={store}>
			<PositionDescription />
		</Provider>
	);
});
