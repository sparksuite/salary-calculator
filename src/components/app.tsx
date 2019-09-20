// Imports
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Gradient from './gradient';

// Global style
const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;

// Functional component
const App: React.FC = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Gradient />
		</React.Fragment>
	);
};

export default App;
