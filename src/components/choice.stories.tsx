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

export const normal = () => (
	<Choice
		choices={['Option 1', 'Option 2']}
		action={action('choice-changed')}
	/>
);
