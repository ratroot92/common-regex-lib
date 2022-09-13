const BTCValidator = require('./bitcoin_validator');
const ETHValidator = require('./ethereum_validator');

function checkBothValidators(address, currency, networkType) {
  const result = BTCValidator.isValidAddress(address, currency, networkType);
  return result || ETHValidator.isValidAddress(address, currency, networkType);
}

module.exports = {
  isValidAddress(address, currency, opts) {
    if (opts) {
      if (opts.chainType === 'erc20') {
        return ETHValidator.isValidAddress(address, currency, opts.networkType);
      } if (opts.chainType === 'omni') {
        return BTCValidator.isValidAddress(address, currency, opts.networkType);
      }
    }
    return checkBothValidators(address, currency, opts);
  },
};
