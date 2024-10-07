import './App.css';

function App() {
  return (
    <div className="App">
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
