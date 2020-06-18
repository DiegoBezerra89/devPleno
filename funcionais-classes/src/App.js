import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
	state  = {
		counter: 1
	}
	increment = () => {
		this.setState({counter: this.state.counter + 1 }) //assim que as propriedades do componente são alteradas, o componente renderiza novamente.
	}
	render() {
		return (
			<div className="App">
				<h1>App2</h1>
				<h1>Class component</h1>
				<h2>Class component guide</h2>
				<p>A guide to explain how to develop based on class components</p>
				<h2>Counter: {this.state.counter}</h2>
				<button onClick={this.increment}>Increment</button>
			</div>
		)
	}
}

const App1 = () => {
	const [counter2, setCounter2] = useState(1)
	const increment = () => {
		setCounter2(counter2 + 1)
	}
	return (
		<div>
			<h1>App1</h1>
			<h1>Functional component</h1>
			<h2>Functional component guide</h2>
			<p>A guide to explain how to develop based on functional components</p>
			<h2>Counter: {counter2}</h2>
			<button onClick={increment}>Increment</button>
			<hr />
		</div>
	)
}

function App() {
  return (
    <div className="App">
			<App1 />
			<App2 />
    </div>
  );
}

export default App;
