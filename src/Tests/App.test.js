import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported
import * as exchangeRateRequestBuilder from '../Components/exchangeRateRequestBuilder'; // Import the module
import { convertCurrency } from '../Components/currencyConverter';
import { cleanup } from '@testing-library/react';


// Mock the getCurrencyList function
jest.mock('../Components/exchangeRateRequestBuilder', () => ({
    getCurrencyList: jest.fn(() => Promise.resolve(['USD', 'EUR', 'GBP'])), // Example currencies
}));

// Mock the convertCurrency function
jest.mock('../Components/currencyConverter', () => ({
    convertCurrency: jest.fn(), // Example currencies
}));

describe('Test suite confirms existence of critical UI elements', () => {

    beforeEach(() => {
        fetch.resetMocks(); // Reset mocks before each test
        jest.spyOn(console, 'error').mockImplementation(() => { }); // Mock console.error to avoid actual logs during testing
    });

    afterEach(() => {
        console.error.mockRestore(); // Restore original console.error implementation
    });

    beforeAll(() => {
        // Optionally set a default response if your App component makes a fetch call on load
        fetch.mockResponseOnce(JSON.stringify({ /* mock data */ }));
    });


    test('renders input for "From Currency"', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if the element exists using getByTestId
            const currencyFromSelectElement = screen.getByTestId('currencyFromSelectElement');

            // Assert that the element is in the document
            expect(currencyFromSelectElement).toBeInTheDocument();
        });
    });

    test('renders input for "To Currency"', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if the element exists using getByTestId
            const currencyToSelectElement = screen.getByTestId('currencyToSelectElement');

            // Assert that the element is in the document
            expect(currencyToSelectElement).toBeInTheDocument();
        });
    });

    test('renders input for Amount Field', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if the element exists using getByTestId
            const amountElement = screen.getByTestId('amountElement');

            // Assert that the element is in the document
            expect(amountElement).toBeInTheDocument();
        });
    });

    test('renders Convert Button', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if the element exists using getByTestId
            const convertButtonElement = screen.getByTestId('convertButton');

            // Assert that the element is in the document
            expect(convertButtonElement).toBeInTheDocument();
        });
    });

    test('renders Swap Button', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if the element exists using getByTestId
            const swapButtonElement = screen.getByTestId('swapButton');

            // Assert that the element is in the document
            expect(swapButtonElement).toBeInTheDocument();
        });
    });

    test('renders Query Field', async () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const queryFieldElement = screen.getByTestId('queryField');
        await waitFor(() => {
            // Assert that the element is in the document
            expect(queryFieldElement).toBeInTheDocument();
        });
        await waitFor(() => {
            // Assert that the element is in the document
            expect(queryFieldElement).toHaveTextContent('');
        });
    });

    test('renders Result Field', async () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const resultFieldElement = screen.getByTestId('resultField');
        await waitFor(() => {
            // Assert that the element is in the document
            expect(resultFieldElement).toBeInTheDocument();
        });
        await waitFor(() => {
            // Assert that the element is in the document
            expect(resultFieldElement).toHaveTextContent('');
        });
    });

    test('renders Currency From loading state initially', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if loading option is present
            const fromSelect = screen.getByTestId('currencyFromSelectElement');

            expect(fromSelect).toContainHTML('<option>Loading...</option>');
        });
    });

    test('renders Currency To loading state initially', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if loading option is present
            const toSelect = screen.getByTestId('currencyToSelectElement');

            expect(toSelect).toContainHTML('<option>Loading...</option>');
        });
    });

    test('renders currency options when fetched successfully', async () => {
        // Mock the implementation of getCurrencyList to return a resolved promise
        const mockCurrencyList = ['USD', 'EUR', 'JPY'];
        exchangeRateRequestBuilder.getCurrencyList.mockImplementation(() =>
            Promise.resolve(mockCurrencyList)
        );

        render(<App />);

        // Wait for the currency list to be fetched and rendered
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Check if the currency options are rendered
        const fromSelect = screen.getByTestId('currencyFromSelectElement');
        const toSelect = screen.getByTestId('currencyToSelectElement');

        // Check if loading options are gone
        expect(fromSelect).not.toContainHTML('<option>Loading...</option>');
        expect(toSelect).not.toContainHTML('<option>Loading...</option>');

        mockCurrencyList.forEach(currency => {
            expect(fromSelect).toContainHTML(`<option value="${currency}">${currency}</option>`);
            expect(toSelect).toContainHTML(`<option value="${currency}">${currency}</option>`);
        });
    });
});


describe('Test suite confirms functionality of critical UI elements', () => {

    beforeEach(() => {
        fetch.resetMocks(); // Reset mocks before each test
        jest.spyOn(console, 'error').mockImplementation(() => { }); // Mock console.error to avoid actual logs during testing
    });

    afterEach(() => {
        console.error.mockRestore(); // Restore original console.error implementation
        cleanup();
    });

    beforeAll(() => {
        // Optionally set a default response if your App component makes a fetch call on load
        fetch.mockResponseOnce(JSON.stringify({ /* mock data */ }));
    });

    test('should call currency conversion correctly and output happy path response', async () => {
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValue(['USD', 'EUR', 'GBP']);
        convertCurrency.mockResolvedValue([120, 'Success']); // Mock conversion success

        render(<App />);

        // Wait for the currency list to load
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Select "USD" as the from currency
        fireEvent.change(screen.getByTestId('currencyFromSelectElement'), { target: { value: 'USD' } });

        // Select "EUR" as the to currency
        fireEvent.change(screen.getByTestId('currencyToSelectElement'), { target: { value: 'EUR' } });

        // Enter the amount
        fireEvent.change(screen.getByTestId('amountElement'), { target: { value: 50 } });

        // Click the Convert button
        fireEvent.click(screen.getByTestId('convertButton'));

        // Verify that convertCurrency was called with the correct arguments
        expect(convertCurrency).toHaveBeenCalledWith('USD', 'EUR', 50);

        // Verify the result is displayed
        await waitFor(() => {
            expect(screen.getByTestId('queryField')).toHaveTextContent('50 USD =');
        });
        await waitFor(() => {
            expect(screen.getByTestId('resultField')).toHaveTextContent('120 EUR');
        });

    });

    test('should handle conversion failure and show an error message', async () => {
        // Mock the currency list response
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValue(['USD', 'EUR']);

        // Mock convertCurrency function response for failure
        convertCurrency.mockResolvedValue([null, 'Conversion failed']);

        render(<App />);

        // Wait for the currency list to load
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Simulate user input
        fireEvent.change(screen.getByTestId('amountElement'), { target: { value: '100' } });
        fireEvent.change(screen.getByTestId('currencyFromSelectElement'), { target: { value: 'USD' } });
        fireEvent.change(screen.getByTestId('currencyToSelectElement'), { target: { value: 'EUR' } });

        // Simulate conversion
        fireEvent.click(screen.getByTestId('convertButton'));

        // Wait for the error message
        await waitFor(() => {
            expect(screen.getByTestId('queryField')).toHaveTextContent('');
        });
        await waitFor(() => {
            expect(screen.getByTestId('resultField')).toHaveTextContent('');
        });
        await waitFor(() => {
            expect(screen.getByTestId('errorField')).toHaveTextContent('Conversion failed');
        });
    });

    test('should gracefully handle fx rate fetch error gracefully', async () => {
        // Mock the implementation of getCurrencyList to return a rejected promise
        exchangeRateRequestBuilder.getCurrencyList.mockImplementation(() =>
            Promise.reject(new Error('Fetch error'))
        );

        render(<App />);

        // Wait for the currency list to be attempted to be fetched
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Ensure that loading is still present in the dropdowns
        const fromSelect = screen.getByTestId('currencyFromSelectElement');
        const toSelect = screen.getByTestId('currencyToSelectElement');

        expect(fromSelect).toContainHTML('<option>Loading...</option>');
        expect(toSelect).toContainHTML('<option>Loading...</option>');
    });

    test('should return an array when resolved successfully', async () => {
        const mockCurrencyList = ['USD', 'EUR', 'JPY'];

        // Mock the function to return a resolved promise with an array
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValueOnce(mockCurrencyList);

        const result = await exchangeRateRequestBuilder.getCurrencyList();

        // Check if the result is an array
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockCurrencyList); // Optionally, check if the returned array matches
    });

    test('should log an error if getCurrencyList does not return an array data type', async () => {
        const mockNonArrayResponse = 'not-an-array';

        // Mock the function to return a resolved promise with a non-array value
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValueOnce(mockNonArrayResponse);

        render(<App />);

        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Ensure console.error is called with the appropriate message
        expect(console.error).toHaveBeenCalledWith('getCurrencyList did not return an array:', mockNonArrayResponse);
    });

    test('should update the fromCurrency and toCurrency when selections change', async () => {
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValue(['USD', 'EUR', 'GBP']);

        render(<App />);

        // Wait for the currency list to load
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Simulate selecting from currency
        fireEvent.change(screen.getByTestId('currencyFromSelectElement'), { target: { value: 'EUR' } });
        expect(screen.getByTestId('currencyFromSelectElement').value).toBe('EUR');

        // Simulate selecting to currency
        fireEvent.change(screen.getByTestId('currencyToSelectElement'), { target: { value: 'GBP' } });
        expect(screen.getByTestId('currencyToSelectElement').value).toBe('GBP');
    });

    test('should update the amount input when typing', () => {
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValue(['USD', 'EUR', 'GBP']);

        render(<App />);

        const amountInput = screen.getByTestId('amountElement');

        // Simulate entering an amount
        fireEvent.change(amountInput, { target: { value: '100' } });
        expect(amountInput.value).toBe('100');
    });

    test('should display error message when amount is invalid', async () => {
        // Mock the currency list response
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValue(['USD', 'EUR', 'GBP']);

        render(<App />);

        // Wait for the currency list to load
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Simulate user entering an invalid amount
        fireEvent.change(screen.getByTestId('amountElement'), { target: { value: 'invalid' } });
        fireEvent.click(screen.getByTestId('convertButton'));

        // Check that an error message is displayed
        await waitFor(() => {
            expect(screen.getByTestId('queryField')).toHaveTextContent('');
        });
        await waitFor(() => {
            expect(screen.getByTestId('resultField')).toHaveTextContent('');
        });
        await waitFor(() => {
            expect(screen.getByTestId('errorField')).toHaveTextContent('Amount must be a valid number');
        });
    });

    test('swaps the fromCurrency and toCurrency when Swap button is clicked', async () => {
        exchangeRateRequestBuilder.getCurrencyList.mockResolvedValue(['USD', 'EUR', 'GBP']);

        render(<App />);

        // Wait for the currency list to load
        await waitFor(() => expect(exchangeRateRequestBuilder.getCurrencyList).toHaveBeenCalled());

        // Simulate selecting from currency and to currency
        fireEvent.change(screen.getByTestId('currencyFromSelectElement'), { target: { value: 'USD' } });
        fireEvent.change(screen.getByTestId('currencyToSelectElement'), { target: { value: 'EUR' } });

        // Simulate clicking the Swap button
        fireEvent.click(screen.getByTestId('swapButton'));

        // Ensure the currencies are swapped
        expect(screen.getByTestId('currencyFromSelectElement').value).toBe('EUR');
        expect(screen.getByTestId('currencyToSelectElement').value).toBe('USD');
    });
    

});