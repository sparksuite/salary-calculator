// Imports
import React from 'react';
import Divider from './divider';

// Stories
export default {
	component: Divider,
	title: 'Divider',
};

export const normal = () => <Divider text='example' />;

export const longer = () => <Divider text='a much longer example' />;
