// Imports
import React from 'react';
import { render } from '@testing-library/react';
import Compensation from './compensation';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('Renders', () => {
	render(
		<Provider store={store}>
			<Compensation />
		</Provider>
	);
});
