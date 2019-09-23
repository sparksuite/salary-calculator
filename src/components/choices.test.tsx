// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Choices from './choices';

// Tests
it('renders fully without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Choices />, div);
	ReactDOM.unmountComponentAtNode(div);
});
