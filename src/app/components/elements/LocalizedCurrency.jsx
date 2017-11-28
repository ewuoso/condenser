import config from 'config';

const {
    DEFAULT_CURRENCY,
} = config.client;

let localCurrencySymbol = DEFAULT_CURRENCY;
let localizedCurrency = (value) => value;

export { localizedCurrency, localCurrencySymbol }
