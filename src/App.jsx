import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCont] = useState(0);
  function increment() {
    setCont(count+1);
  }
  function decrement() {
    setCont(count-1);
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>  
          <button onClick={increment}>+</button>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
