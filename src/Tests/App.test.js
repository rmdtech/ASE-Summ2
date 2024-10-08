import { render, screen,waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported
import * as exchangeRateRequestBuilder from '../Components/exchangeRateRequestBuilder'; // Import the module


// Mock the getCurrencyList function
jest.mock('../Components/exchangeRateRequestBuilder', () => ({
    getCurrencyList: jest.fn(() => Promise.resolve(['USD', 'EUR', 'GBP'])), // Example currencies
}));

describe('Test suite confirms existence of critical UI elements', () => {

    beforeEach(() => {
        fetch.resetMocks(); // Reset mocks before each test
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

    test('renders Result Field', async () => {
        render(<App />);
        await waitFor(() => {
            // Check if the element exists using getByTestId
            const resultFieldElement = screen.getByTestId('resultField');

            // Assert that the element is in the document
            expect(resultFieldElement).toBeInTheDocument();
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

    test('handles fetch error gracefully', async () => {
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

});