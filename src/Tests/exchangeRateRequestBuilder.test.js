import { getCurrencyList } from '../Components/exchangeRateRequestBuilder';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported
fetch.enableMocks();


describe('getCurrencyList', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should return currency data when called', async () => {
        const mockData = { usd: 'United States Dollar', gbp: 'British Pound' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).toBeTruthy();
    });

    it('should filter out non-currencies/cryptocurrencies', async () => {
        const mockData = { usd: 'United States Dollar', gbp: 'British Pound', btc: 'bitcoin' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).not.toContain('BTC'); //All variations of Bitcoin removed
        expect(data).not.toContain('btc'); //All variations of Bitcoin removed
        expect(data).not.toContain('btc: bitcoin'); //All variations of Bitcoin removed
        expect(data).toContain('GBP: British Pound'); //Fiat currency still included
    });

    it('should filter out entries with missing values', async () => {
        const mockData = { usd: null, gbp: undefined, eur: '' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).not.toContain('USD: null');
        expect(data).not.toContain('GBP: undefined');
        expect(data).not.toContain('EUR: ');
    });

    it('should set JSON keys to uppercase before stringifying', async () => {
        const mockData = { usd: 'United States Dollar', gbp: 'British Pound'};

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const data = await getCurrencyList();

        expect(data).not.toContain('usd: United States Dollar'); //unmodified version
        expect(data).not.toContain('gbp: British Pound'); //unmodified version
        expect(data).toContain('USD: United States Dollar'); //uppercase version
        expect(data).toContain('GBP: British Pound'); //uppercase version
    });

    it('should handle an empty response', async () => {
        const mockData = { };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));
        const result = await getCurrencyList();

        expect(result).toEqual([]); // Should return an empty array
    });

});
