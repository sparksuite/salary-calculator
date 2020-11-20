// Imports
import React from 'react';
import { render } from '@testing-library/react';
import App from './app';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('Renders', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
});
