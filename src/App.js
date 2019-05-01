import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<h1>Hello, world!</h1>
			</div>
		);
	}
}

export default connect(null)(App);
