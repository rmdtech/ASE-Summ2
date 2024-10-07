import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

          <select data-testid="currencyFromSelectElement"></select>
          <select data-testid="currencyToSelectElement"></select>
          <input data-testid="amountElement"></input>
          <button data-testid="convertButton">Convert</button>
          <button data-testid="swapButton">Swap</button>
          <p data-testid="resultField">Result</p>
    </div>
  );
}

export default App;
