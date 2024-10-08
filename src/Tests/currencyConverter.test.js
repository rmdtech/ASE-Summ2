import * as exchangeRateRequestBuilder from '../Components/exchangeRateRequestBuilder';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported
fetch.enableMocks();




// Mock the getCurrencyList function
jest.mock('../Components/exchangeRateRequestBuilder', () => ({
    getExchangeRate: jest.fn(() => Promise.resolve(0.85)), // Example currencies
}));


describe('currencyConverter', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('converts currency successfully with valid inputs', async () => {
        // Mock the exchange rate
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const amount = 100;

        const [result, message] = await convertCurrency(fromCurrency, toCurrency, amount);

        expect(result).toBe(85); // 100 * 0.85
        expect(message).toBe('Success');
    });

    test('returns an error for invalid amount input', async () => {
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const amount = 'invalid'; // Invalid amount

        const [result, message] = await convertCurrency(fromCurrency, toCurrency, amount);

        expect(result).toBeNull();
        expect(message).toBe('Amount must be a valid number');
    });

    test('returns an error for non-numeric exchange rate', async () => {
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const amount = 100;
        const exchangeRate = 'invalid'; // Mocking an invalid exchange rate

        exchangeRateRequestBuilder.getExchangeRate.mockResolvedValueOnce(exchangeRate);

        const [result, message] = await convertCurrency(fromCurrency, toCurrency, amount);

        expect(result).toBeNull();
        expect(message).toBe('invalid');
    });

    test('correctly handles edge cases for currency formatting', async () => {
        const fromCurrency = 'USDXXX'; // Extra characters should be removed
        const toCurrency = 'EURYYY'; // Extra characters should be removed
        const amount = 100;
        const exchangeRate = 0.85;

        fetch.mockResponseOnce(JSON.stringify(exchangeRate));

        const [result, message] = await convertCurrency(fromCurrency, toCurrency, amount);

        expect(result).toBe(85);
        expect(message).toBe('Success');
    });

    test('handles fetch failure gracefully', async () => {
        const fromCurrency = 'USD';
        const toCurrency = 'EUR';
        const amount = 100;
        const error = new Error('Fetch error');

        exchangeRateRequestBuilder.getExchangeRate.mockResolvedValueOnce(error);

        const [result, message] = await convertCurrency(fromCurrency, toCurrency, amount);

        expect(result).toBeNull();
        expect(message).toBe(error)
    });

});

