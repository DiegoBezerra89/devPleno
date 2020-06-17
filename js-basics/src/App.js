import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

const App = () => {
	const names = ['Diego', 'Bezerra']
	const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div>
			{
				namesElements
			}
			<Header />
    </div>
  );
}

export default App;
