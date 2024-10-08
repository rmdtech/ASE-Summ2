import './App.css';
import { getCurrencyList } from './Components/exchangeRateRequestBuilder';
import { useState, useEffect } from 'react';

function App() {
    const [currencyList, setCurrencyList] = useState([]); // Ensure it's initialized as an empty array

    useEffect(() => {
        // Fetch the currency list and handle the result safely
        getCurrencyList()
            .then((list) => {
                if (Array.isArray(list)) {
                    setCurrencyList(list); // Ensure the result is an array before setting it
                } else {
                    console.error('getCurrencyList did not return an array:', list);
                }
            })
            .catch((error) => {
                console.error('Error fetching currency list:', error);
            });
    }, []);

    return (
        <div className="App">
            <select data-testid="currencyFromSelectElement">
                {currencyList.length > 0 ? currencyList.map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                )) : <option>Loading...</option>}
            </select>
            <select data-testid="currencyToSelectElement">
                {currencyList.length > 0 ? currencyList.map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                )) : <option>Loading...</option>}
            </select>
            <input data-testid="amountElement"></input>
            <button data-testid="convertButton">Convert</button>
            <button data-testid="swapButton">Swap</button>
            <p data-testid="resultField">Result</p>
        </div>
    );
}

export default App;