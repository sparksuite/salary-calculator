// Imports
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Gradient from './gradient';
import Header from './header';

// Global style
const GlobalStyle = createGlobalStyle`
	/* Duplicated in preview-head.html */
	body {
		margin: 0;
		padding: 0;
		font-family: Raleway, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
		text-size-adjust: 100%;
	}
	
	#root {
		width: 90%;
		max-width: 800px;
		margin: auto;
	}
`;

// Functional component
const App: React.FC = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Gradient />
			<Header />
		</React.Fragment>
	);
};

export default App;
