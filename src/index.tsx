// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './redux/store';
import { Provider } from 'react-redux';

// Mount & render
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// Enable hot reloading (does not support retaining component state)
if (module.hot) {
	module.hot.accept();
}
