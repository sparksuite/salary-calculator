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
	<Choice
		choices={['Option 1', 'Option 2']}
		onChange={action('choice-changed')}
		ariaLabel='ARIA label'
	/>
);

export const grouped = () => (
	<Choice
		choices={{
			'Group 1': ['Option 1', 'Option 2'],
			'Group 2': ['Option 3', 'Option 4'],
		}}
		onChange={() => null}
		ariaLabel='ARIA label'
	/>
);
