// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Choice from './choice';

// Tests
it('renders fully without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Choice choices={['Option 1', 'Option 2']} action={() => null} />,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
