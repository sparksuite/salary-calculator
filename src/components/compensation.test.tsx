// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Compensation from './compensation';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('renders shallowly', () => {
	shallow(
		<Provider store={store}>
			<Compensation />
		</Provider>
	);
});
