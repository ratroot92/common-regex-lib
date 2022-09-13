const cryptoUtils = require('./crypto/utils');

/**
* Check if an address is valid
*
* @param {string} _address - An address
*
* @return {boolean} - True if address is valid, false otherwise
*/
const isValidAddress = function(_address) {
  const address = _address.toString().toUpperCase().replace(/-/g, '');
  if (!address || address.length !== 40) {
    return false;
  }
  const decoded = cryptoUtils.toHex(cryptoUtils.base32.b32decode(address));
  const stepThreeChecksum = cryptoUtils.keccak256Checksum(Buffer.from(decoded.slice(0, 42), 'hex'));

  return stepThreeChecksum === decoded.slice(42);
};

module.exports = {
  isValidAddress,
};
