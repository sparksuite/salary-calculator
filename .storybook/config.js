// Imports
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';

// Configure with *.stories.tsx files
configure(requireContext('../src/components', true, /\.stories\.tsx$/), module);

// Center every story with some extra left/right space
const CenterDecorator = storyFn => <div style={{ maxWidth: '80%', margin: 'auto' }}>{storyFn()}</div>;
addDecorator(CenterDecorator);
