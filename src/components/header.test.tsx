// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

// Tests
it('renders fully without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header />, div);
	ReactDOM.unmountComponentAtNode(div);
});
