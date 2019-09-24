// Imports
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';

// Set up middelwares
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

// Create store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Export
export default store;
