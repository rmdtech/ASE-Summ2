import { getExchangeRate } from './exchangeRateRequestBuilder'

export async function convertCurrency(fromCurrency, toCurrency, amount) {
    //Removes extra characters so that only the 3 digit ISO code is used
    fromCurrency = fromCurrency.replace(/(?<=^.{3}).*/, '');
    toCurrency = toCurrency.replace(/(?<=^.{3}).*/, '');

    if (isNaN(amount)) {
        //If entered amount is not a number
        return ([null, "Amount must be a valid number"]);
    } else {
        //If entered amount is a number
        const response = await getExchangeRate(fromCurrency, toCurrency);
        if (isNaN(response)) {
            //If fx rate is not a number
            return ([null, response]);
        } else {
            //If fx rate is a number
            const convertedVal = amount * response;
            return ([convertedVal, "Success"]);
        }
    }
}

