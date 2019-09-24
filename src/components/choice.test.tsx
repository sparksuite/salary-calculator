// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Choice from './choice';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<Choice choices={['Option 1', 'Option 2']} onChange={() => null} />);
});
