// Imports
import React from 'react';
import Choice from './choice';
import { action } from '@storybook/addon-actions';

// Stories
export default {
	component: Choice,
	title: 'Choice',
	parameters: {
		backgrounds: [
			{
				name: 'Default',
				value: '#8acc5e',
				default: true,
			},
		],
	},
};

export const simple = () => (
	<Choice onChange={action('choice-changed')} ariaLabel='ARIA label'>
		<option>Option 1</option>
		<option>Option 2</option>
	</Choice>
);

export const grouped = () => (
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

export const someDisabled = () => (
	<Choice onChange={() => null} ariaLabel='ARIA label'>
		<option disabled>Option 1</option>
		<option>Option 2</option>
	</Choice>
);
