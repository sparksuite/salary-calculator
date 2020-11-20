// Imports
import React from 'react';
import Header from './header';

// Stories
export default {
	component: Header,
	title: 'Header',
	parameters: {
		backgrounds: {
			default: 'default',
			values: [{ name: 'default', value: '#67B1D6' }],
		},
	},
};

export const normal = () => <Header />;
