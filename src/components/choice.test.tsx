// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Choice from './choice';

// Tests
it('renders shallowly without crashing (simple)', () => {
	shallow(<Choice choices={['Option 1', 'Option 2']} onChange={() => null} />);
});

it('renders shallowly without crashing (grouped)', () => {
	shallow(
		<Choice
			choices={{
				'Group 1': ['Option 1', 'Option 2'],
				'Group 2': ['Option 3', 'Option 4'],
			}}
			onChange={() => null}
			ariaLabel='ARIA label'
		/>
	);
});
