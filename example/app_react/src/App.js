import logo from './logo.svg';
import './App.css';
import Routes from  './Routes';

/* eslint-disable */
console.log(`__webpack_require__.p <=====App===============>`, __webpack_require__.p);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Routes />
          Edit <code>src/App.js</code> and save to reload.
        </div>
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
