import React, { Component } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

class App extends Component {

	render() {
		return (
			<div className="App">
				<h1>Hello, world!</h1>
				<TodoForm />
				<TodoItem />
			</div>
		);
	}
}

export default App;
