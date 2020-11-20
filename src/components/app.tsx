// Imports
import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import Gradient from './gradient';
import Header from './header';
import Choices from './choices';
import PositionDescription from './position-description';
import Compensation from './compensation';
import Footer from './footer';

// Global style
export const GlobalStyle = createGlobalStyle`
	/* Duplicated in preview-head.html */
	body {
		margin: 0;
		padding: 0;
		padding-bottom: 5rem;
		font-family: Raleway, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
		text-size-adjust: 100%;
		font-variant-numeric: lining-nums;
		font-feature-settings:"lnum" 1;
	}
	
	/* Other styles */
	#root {
		width: 90%;
		max-width: 850px;
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

			<main>
				<Choices />
				<PositionDescription />
				<Compensation />
			</main>

			<Footer />
		</React.Fragment>
	);
};

export default App;
