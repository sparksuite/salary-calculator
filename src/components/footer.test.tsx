// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<Footer />);
});
