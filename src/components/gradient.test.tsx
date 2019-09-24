// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Gradient from './gradient';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<Gradient />);
});
