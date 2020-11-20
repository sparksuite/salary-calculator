// Imports
import React from 'react';
import { render } from '@testing-library/react';
import Choice from './choice';

// Tests
it('Renders (simple)', () => {
	render(
		<Choice onChange={() => null} ariaLabel='ARIA label'>
			<option>Option 1</option>
			<option>Option 2</option>
		</Choice>
	);
});

it('Renders (grouped)', () => {
	render(
		<Choice onChange={() => null} ariaLabel='ARIA label'>
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

it('Renders (some disabled)', () => {
	render(
		<Choice onChange={() => null} ariaLabel='ARIA label'>
			<option disabled>Option 1</option>
			<option>Option 2</option>
		</Choice>
	);
});
