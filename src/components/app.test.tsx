// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './app';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<App />);
});
