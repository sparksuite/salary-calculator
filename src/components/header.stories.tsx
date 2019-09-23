// Imports
import React from 'react';
import Header from './header';

// Stories
export default {
	component: Header,
	title: 'Header',
	parameters: {
		backgrounds: [
			{
				name: 'Default',
				value: '#67B1D6',
				default: true,
			},
		],
	},
};

export const normal = () => <Header />;
