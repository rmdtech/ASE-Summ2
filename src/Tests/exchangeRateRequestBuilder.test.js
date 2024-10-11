import { httpRequest } from '../Components/ApiRequestHandler';
import { getCurrencyList } from '../Components/exchangeRateRequestBuilder';
import { getExchangeRate } from '../Components/exchangeRateRequestBuilder';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported
fetch.enableMocks();


describe('getCurrencyList', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('should return currency data when called', async () => {
        const mockData = { usd: 'United States Dollar', gbp: 'British Pound' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).toBeTruthy();
    });

    test('should filter out non-currencies/cryptocurrencies', async () => {
        const mockData = { usd: 'United States Dollar', gbp: 'British Pound', btc: 'bitcoin' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).not.toContain('BTC'); //All variations of Bitcoin removed
        expect(data).not.toContain('btc'); //All variations of Bitcoin removed
        expect(data).not.toContain('btc: bitcoin'); //All variations of Bitcoin removed
        expect(data).toContain('GBP: British Pound'); //Fiat currency still included
    });

    test('should filter out entries with missing values', async () => {
        const mockData = { usd: null, gbp: undefined, eur: '' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).not.toContain('USD: null');
        expect(data).not.toContain('GBP: undefined');
        expect(data).not.toContain('EUR: ');
    });

    test('should set JSON keys to uppercase before stringifying', async () => {
        const mockData = { usd: 'United States Dollar', gbp: 'British Pound' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).not.toContain('usd: United States Dollar'); //unmodified version
        expect(data).not.toContain('gbp: British Pound'); //unmodified version
        expect(data).toContain('USD: United States Dollar'); //uppercase version
        expect(data).toContain('GBP: British Pound'); //uppercase version
    });

    test('should handle an empty response', async () => {
        const mockData = {};

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));
        const result = await getCurrencyList();

        expect(result).toEqual([]); // Should return an empty array
    });

});

describe('getExchangeRate', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('should return the correct exchange rate when found', async () => {
        const mockData = {
            usd: { eur: 0.85 }
        };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const exchangeRate = await getExchangeRate('USD', 'EUR');

        expect(exchangeRate).toBe(0.85);
    });

    test('should return "Exchange Rate not found" if the rate is missing', async () => {
        const mockData = {
            usd: { gbp: 0.75 }
        };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const exchangeRate = await getExchangeRate('USD', 'EUR');

        expect(exchangeRate).toBe("Exchange Rate not found");
    });

    test('should handle lowercase inputs and return the correct exchange rate', async () => {
        const mockData = {
            usd: { eur: 0.85 }
        };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const exchangeRate = await getExchangeRate('usd', 'eur');

        expect(exchangeRate).toBe(0.85);
    });

    test('should handle uppercase inputs and return the correct exchange rate', async () => {
        const mockData = {
            usd: { eur: 0.85 }
        };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const exchangeRate = await getExchangeRate('USD', 'EUR');

        expect(exchangeRate).toBe(0.85);
    });

    test('should handle an empty response and return "Exchange Rate not found"', async () => {
        const mockData = {
            usd: {}
        };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const exchangeRate = await getExchangeRate('USD', 'EUR');

        expect(exchangeRate).toBe("Exchange Rate not found");
    });

    test('should handle non-existing currency data and return "Exchange Rate not found"', async () => {
        const mockData = {};

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const exchangeRate = await getExchangeRate('USD', 'EUR');

        expect(exchangeRate).toBe("Exchange Rate not found");
    });


});
