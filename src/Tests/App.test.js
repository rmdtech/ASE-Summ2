import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
import fetch from 'jest-fetch-mock'; // Ensure jest-fetch-mock is imported

describe('Test suite confirms existence of critical UI elements', () => {

    beforeEach(() => {
        fetch.resetMocks(); // Reset mocks before each test
    });

    beforeAll(() => {
        // Optionally set a default response if your App component makes a fetch call on load
        fetch.mockResponseOnce(JSON.stringify({ /* mock data */ }));
    });


    test('renders input for "From Currency"', () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const currencyFromSelectElement = screen.getByTestId('currencyFromSelectElement');

        // Assert that the element is in the document
        expect(currencyFromSelectElement).toBeInTheDocument();
    });

    test('renders input for "To Currency"', () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const currencyToSelectElement = screen.getByTestId('currencyToSelectElement');

        // Assert that the element is in the document
        expect(currencyToSelectElement).toBeInTheDocument();
    });

    test('renders input for Amount Field', () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const amountElement = screen.getByTestId('amountElement');

        // Assert that the element is in the document
        expect(amountElement).toBeInTheDocument();
    });

    test('renders Convert Button', () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const convertButtonElement = screen.getByTestId('convertButton');

        // Assert that the element is in the document
        expect(convertButtonElement).toBeInTheDocument();
    });

    test('renders Swap Button', () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const swapButtonElement = screen.getByTestId('swapButton');

        // Assert that the element is in the document
        expect(swapButtonElement).toBeInTheDocument();
    });

    test('renders Result Field', () => {
        render(<App />);
        // Check if the element exists using getByTestId
        const resultFieldElement = screen.getByTestId('resultField');

        // Assert that the element is in the document
        expect(resultFieldElement).toBeInTheDocument();
    });

});