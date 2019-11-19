// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Divider from './divider';

// Tests
it('renders shallowly', () => {
	shallow(<Divider text='example' />);
});
