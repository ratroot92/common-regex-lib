const isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

const chai = isNode ? require('chai') : window.chai;

const { expect } = chai;

const WAValidator = isNode ? require('../src/wallet_address_validator') : window.WAValidator;

describe('WAValidator.getCurrencies()', () => {
  it('Should get all currencies', () => {
    const currencies = WAValidator.getCurrencies();
    expect(currencies).to.be.ok;
    expect(currencies.length).to.be.greaterThan(0);
  });

  it('Should find a specific currency by symbol', () => {
    const currency = WAValidator.findCurrency('xrp');
    expect(currency).to.be.ok;
    expect(currency.name).to.equal('Ripple');
    expect(currency.symbol).to.equal('xrp');
  });

  it('Should find a specific currency by name', () => {
    const currency = WAValidator.findCurrency('Ripple');
    expect(currency).to.be.ok;
    expect(currency.name).to.equal('Ripple');
    expect(currency.symbol).to.equal('xrp');
  });

  it('Should return null if currency is not found', () => {
    const currency = WAValidator.findCurrency('random');
    expect(currency).to.be.null;
  });
});
