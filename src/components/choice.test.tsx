// Imports
import React from 'react';
import { shallow } from 'enzyme';
import Choice from './choice';

// Tests
it('renders shallowly without crashing (simple)', () => {
    shallow(
		<Choice
			onChange={() => null}
			ariaLabel='ARIA label'
            >
                <option>Option 1</option>
                <option>Option 2</option>
            </Choice>
	);
});

it('renders shallowly without crashing (grouped)', () => {
	shallow(
		<Choice
			onChange={() => null}
			ariaLabel='ARIA label'
            >
                <optgroup label='Group 1'>
                <option>Option 1</option>
                <option>Option 2</option>
                </optgroup>
                
                <optgroup label='Group 2'>
                <option>Option 3</option>
                <option>Option 4</option>
                </optgroup>
            </Choice>
	);
});

it('renders shallowly without crashing (some disabled)', () => {
	shallow(
		<Choice
			onChange={() => null}
			ariaLabel='ARIA label'
            >
                <option disabled>Option 1</option>
                <option>Option 2</option>
            </Choice>
	);
});
