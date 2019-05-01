import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import todosReducer from './reducers/todosReducer';

import * as serviceWorker from './serviceWorker';

const rootReducer = () => {
	return combineReducers({
		todos: todosReducer,
	});
}

const store = createStore(
	rootReducer,
	// Support for Redux dev tools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
