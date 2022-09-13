const cryptoUtils = require('./crypto/utils');

const regexp = new RegExp('^[0-9]{1,20}L$');

module.exports = {
  isValidAddress(address) {
    if (!regexp.test(address)) {
      return false;
    }
    return this.verifyAddress(address);
  },

  verifyAddress(address) {
    const BUFFER_SIZE = 8;
    const bigNumber = address.substring(0, address.length - 1);
    const addressBuffer = cryptoUtils.bigNumberToBuffer(bigNumber);
    return Buffer.from(addressBuffer).slice(0, BUFFER_SIZE).equals(addressBuffer);
  },
};
