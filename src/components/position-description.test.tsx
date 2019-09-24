// Imports
import React from 'react';
import { shallow } from 'enzyme';
import PositionDescription from './position-description';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('renders shallowly without crashing', () => {
	shallow(
		<Provider store={store}>
			<PositionDescription />
		</Provider>
	);
});
