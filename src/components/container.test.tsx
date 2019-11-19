// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';

// Tests
it('renders shallowly', () => {
	shallow(<Container />);
});
