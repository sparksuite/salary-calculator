// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './app';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<App />);
});

it('renders fully without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
