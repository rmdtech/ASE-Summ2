import { httpRequest } from './ApiRequestHandler.js'

const baseUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1';

export async function getCurrencyList() {
    const apiUrl = baseUrl + '/currencies.json';
    const response = await httpRequest(apiUrl);

    const validCurrencies = [
        // The API includes lots of entities which are not valid currencies, this list contains ISO 4217 3 letter currency codes of currently valid and circulating currencies
        "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF",
        "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CKD", "CLP", "CNY", "COP",
        "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "EHP", "ERN", "ETB", "EUR", "FJD", "FKP",
        "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR",
        "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KPW",
        "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT",
        "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB",
        "PEN", "PGK", "PHP", "PKR", "PLN", "PND", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR",
        "SDG", "SEK", "SGD", "SHP", "SLL", "SLS", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT",
        "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VED", "VES", "VND", "VUV",
        "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWB", "ZWL",
    ];



    // Combine key and value into a single string for each entry
    const currenciesArray = Object.entries(response)
                                    .filter(([key, value]) => validCurrencies.includes(key.toUpperCase()) && value !== null && value !== undefined && value !== '') // Filter out entries with missing values
                                    .map(([key, value]) => `${key.toUpperCase()}: ${value}`);

    
    return currenciesArray;
}

export async function getExchangeRate(fromCurrency, toCurrency) {

    fromCurrency = fromCurrency.replace(/(?<=^.{3}).*/, '');
    toCurrency = toCurrency.replace(/(?<=^.{3}).*/, '');

    const notFoundMessage = "Exchange Rate not found";
    const apiUrl = baseUrl + '/currencies/' + fromCurrency.toLowerCase() + '.json';

    const response = await httpRequest(apiUrl);

    const responseData = response[fromCurrency.toLowerCase()] || notFoundMessage;

    const exchangeRate = Object.entries(responseData).find(([key]) => key === toCurrency.toLowerCase())?.[1] || notFoundMessage;

    return exchangeRate;

}