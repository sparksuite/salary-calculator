// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Divider from './divider';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<Divider text='example' />);
});
