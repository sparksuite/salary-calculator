// Imports
import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from 'components/app';
import store from 'redux/store';
import { Provider } from 'react-redux';

// Give every story access to the React Redux store
addDecorator((storyFn) => <Provider store={store}>{storyFn()}</Provider>);

// Inject global styles
addDecorator((storyFn) => (
	<React.Fragment>
		<GlobalStyle />
		{storyFn()}
	</React.Fragment>
));

// Indicate being rendered by Storybook
window.STORYBOOK = true;

// Use edge-to-edge layout
//  -> This ensures the specified viewport is used, and not arbitrarily changed
export const parameters = {
	layout: 'fullscreen',
};
