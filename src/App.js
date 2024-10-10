import './App.css';
import { getCurrencyList } from './Components/exchangeRateRequestBuilder';
import { convertCurrency } from './Components/currencyConverter'; // Import the convertCurrency function
import { useState, useEffect } from 'react';

function App() {
    const [currencyList, setCurrencyList] = useState([]); // Store the currency list
    const [fromCurrency, setFromCurrency] = useState(''); // Store the selected from currency
    const [toCurrency, setToCurrency] = useState(''); // Store the selected to currency
    const [amount, setAmount] = useState(''); // Store the entered amount
    const [result, setResult] = useState(''); // Store the conversion result
    const [query, setQuery] = useState(''); // Store the conversion result

    // Fetch currency list
    useEffect(() => {
        getCurrencyList()
            .then((list) => {
                if (Array.isArray(list)) {
                    setCurrencyList(list);
                    // Set default currencies to the first item in the list if it exists
                    if (list.length > 0) {
                        setFromCurrency(list[0]);
                        setToCurrency(list[0]);
                    }
                } else {
                    console.error('getCurrencyList did not return an array:', list);
                }
            })
            .catch((error) => {
                console.error('Error fetching currency list:', error);
            });
    }, []);

    // Handle currency conversion
    const handleConvert = async () => {
        const numericAmount = parseFloat(amount); // Ensure the amount is a number
        if (isNaN(numericAmount)) {
            setQuery(``);
            setResult('Amount must be a valid number');
            return;
        }

        const [convertedValue, message] = await convertCurrency(fromCurrency, toCurrency, numericAmount);
        if (message === "Success") {
            setQuery(`${amount} ${fromCurrency} = `);
            setResult(`${convertedValue} ${toCurrency}`);
        } else {
            setQuery(``);
            setResult(message); // Display error message
        }
    };

    // Handle swapping the selected currencies
    const handleSwap = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <div className="App">
            {/* From Currency Dropdown */}
            <select
                data-testid="currencyFromSelectElement"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {currencyList.length > 0
                    ? currencyList.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))
                    : <option>Loading...</option>}
            </select>

            {/* To Currency Dropdown */}
            <select
                data-testid="currencyToSelectElement"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {currencyList.length > 0
                    ? currencyList.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))
                    : <option>Loading...</option>}
            </select>

            {/* Amount Input */}
            <input
                data-testid="amountElement"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />

            {/* Convert Button */}
            <button data-testid="convertButton" onClick={handleConvert}>
                Convert
            </button>

            {/* Swap Button */}
            <button data-testid="swapButton" onClick={handleSwap}>
                Swap
            </button>

            {/* Result Field */}
            <p data-testid="queryField">{query}</p>
            <p data-testid="resultField">{result}</p>

        </div>
    );
}

export default App;