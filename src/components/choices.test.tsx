// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Choices from './choices';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Tests
it('renders shallowly without crashing', () => {
	shallow(<Provider store={store}><Choices /></Provider>);
});
