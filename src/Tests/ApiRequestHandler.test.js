import { httpRequest } from '../Components/ApiRequestHandler';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported
fetch.enableMocks();



describe('httpRequest', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('should return data when the API call is successful', async () => {
        const mockData = { key: 'value' };

        // Mock the successful response
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const apiUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';
        const data = await httpRequest(apiUrl);

        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(apiUrl);
    });

    test('should handle fetch failure', async () => {
        const mockError = new Error('Network Error');
        fetch.mockRejectedValueOnce(mockError);

        const apiUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';
        const data = await httpRequest(apiUrl);

        expect(fetch).toHaveBeenCalledWith(apiUrl);
        expect(data).toEqual(mockError);
    });



});
