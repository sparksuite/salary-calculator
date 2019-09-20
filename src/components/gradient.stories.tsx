// Imports
import React from 'react';
import Gradient from './gradient';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Stories
export default {
	component: Gradient,
	title: 'Gradient title',
};

export const normal = () => <Gradient />;
