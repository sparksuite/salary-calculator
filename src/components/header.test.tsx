// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<Header />);
});
