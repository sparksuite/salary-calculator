// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Gradient from './gradient';

// Tests
it('renders fully without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Gradient />, div);
	ReactDOM.unmountComponentAtNode(div);
});
