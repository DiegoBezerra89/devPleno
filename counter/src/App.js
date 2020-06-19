import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		counter: 1
	}
	increment = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}
	decrement = () => {
		this.setState({
			counter: this.state.counter - 1
		})
	}
	clear = () => {
		this.setState({
			counter: 0
		})
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					Contador: {this.state.counter}
					<div>
					 <button className='button' onClick={this.decrement}>Decrement</button>
					 <button className='button' onClick={this.increment}>Increment</button>
					</div>
					 <button className='button' onClick={this.clear}>Clear</button>
				</header>
			</div>
		);
	}
}

export default App;
