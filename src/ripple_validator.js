const baseX = require('base-x');
const cryptoUtils = require('./crypto/utils');

const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp(`^r[${ALLOWED_CHARS}]{27,35}$`);

module.exports = {
  /**
     * ripple address validation
     */
  isValidAddress(address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address);
    }

    return false;
  },

  verifyChecksum(address) {
    const bytes = codec.decode(address);
    const computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
    const checksum = cryptoUtils.toHex(bytes.slice(-4));

    return computedChecksum === checksum;
  },
};
