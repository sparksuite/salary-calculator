// Imports
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';

// Set up middelwares
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

// Create store, restoring any state preserved across HMR update
const store = createStore(
	rootReducer,
	module.hot?.data?.state,
	applyMiddleware(...middlewares)
);

// Before this module is disposed during HMR update, save the current state
//  -> That way, it can be restored when the module is re-evaluated above
if (module.hot) {
	module.hot.addDisposeHandler((data) => {
		data.state = store.getState();
	});
}

// Export
export default store;
