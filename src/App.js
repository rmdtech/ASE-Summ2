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
    const [ error, setError ] = useState(''); // Store error message

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
            setQuery('');
            setResult('');
            setError('Amount must be a valid number');
            return;
        }

        const [convertedValue, message] = await convertCurrency(fromCurrency, toCurrency, numericAmount);
        if (message === "Success") {
            setQuery(`${amount} ${fromCurrency} = `);
            setResult(`${convertedValue} ${toCurrency}`);
            setError('');
        } else {
            setQuery(``);
            setResult('');
            setError(message); // Display error message
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
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </head>
            {/* Header Banner */}
            <header className="App-header">
                <h1>Summative 2 - Currency Conversion Project</h1>
            </header>
            <div className="CurrencyConverter">

                {/* Row for Amount, From, Swap, and To inputs */}
                <div className="row input-group">
                    <div className="input-container">
                        <p id='lbl-amount'className='input-heading'>Amount</p>
                        <input className={`inputField ${error ? 'error-outline' : ''}`}
                            aria-labelledby="lbl-amount"
                            data-testid="amountElement"
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                    </div>

                    <div className="input-container">
                        <p id='lbl-currencyFrom' className='input-heading'>From</p>
                        <select className='inputField'
                            aria-labelledby="lbl-currencyFrom"
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
                    </div>

                    <div className="swap-button-container">
                        <p className='swap-heading'></p>
                        <button data-testid="swapButton" onClick={handleSwap} className="swap-button">
                            <span className="material-symbols-outlined">swap_horiz</span>
                        </button>
                    </div>

                    <div className="input-container">
                        <p id='lbl-currencyTo' className='input-heading'>To</p>
                        <select className='inputField'
                            aria-labelledby="lbl-currencyTo"
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
                    </div>
                </div>
                {/* Row for error messages */}
                <div className="row input-group">
                    <div className="input-container">
                        <p className='ErrorText' data-testid="errorField">{ error }</p>
                    </div>
                </div>
                {/* Row for result and convert button */}
                <div className="row result-convert-row">
                    <div className="result-section">
                        <p className="QueryText" data-testid="queryField">{query}</p>
                        <p className="ResultText" data-testid="resultField">{result}</p>
                    </div>
                    <button className="convert-button" data-testid="convertButton" onClick={handleConvert}>
                        Convert
                    </button>
                </div>

            </div>
        </div>
    );
}

export default App;
