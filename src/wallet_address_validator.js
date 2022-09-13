const currencies = require('./currencies');

const DEFAULT_CURRENCY_NAME = 'bitcoin';

module.exports = {
  // validate: function (address, currencyNameOrSymbol, networkType) {
  validate(address, currencyNameOrSymbol, opts) {
    const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

    if (currency && currency.validator) {
      if (opts && typeof opts === 'string') {
        return currency.validator.isValidAddress(address, currency, { networkType: opts });
      }
      return currency.validator.isValidAddress(address, currency, opts);
    }

    throw new Error(`Missing validator for currency: ${currencyNameOrSymbol}`);
  },
  getCurrencies() {
    return currencies.getAll();
  },
  findCurrency(symbol) {
    return currencies.getByNameOrSymbol(symbol) || null;
  },
};
/**
 * const validate = (address, currencyNameOrSymbol, opts) => {
  const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);
  if (currency && currency.validator) {
    if (opts && typeof opts === 'string') {
      return currency.validator.isValidAddress(address, currency, {
        networkType: opts,
      });
    }
    return currency.validator.isValidAddress(address, currency, opts);
  }

  throw new Error(`Missing validator for currency: ${currencyNameOrSymbol}`);
};
// const walletAddresss = '98e0cb0b-690b-402d-8934-713aac6d6eed';
const walletAddresss = '0xc7abd8a1ff99f46c679ddf1209a2139f5fa97ce2';

const validFor = currencies.getAll().reduce((validList, cur) => {
  const currenySymbol = cur.symbol;
  const options = 'prod';
  const valid = validate(walletAddresss, currenySymbol, options);
  if (valid) {
    validList.push({ symbol: cur.symbol });
  }
  return validList;
}, []);
 */
