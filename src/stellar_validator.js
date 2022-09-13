const baseX = require('base-x');
const crc = require('crc');
const cryptoUtils = require('./crypto/utils');

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const base32 = baseX(ALPHABET);
const regexp = new RegExp(`^[${ALPHABET}]{56}$`);
const ed25519PublicKeyVersionByte = (6 << 3);

function swap16(number) {
  const lower = number & 0xFF;
  const upper = (number >> 8) & 0xFF;
  return (lower << 8) | upper;
}

module.exports = {
  isValidAddress(address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address);
    }

    return false;
  },

  verifyChecksum(address) {
    // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
    const bytes = base32.decode(address);
    if (bytes[0] !== ed25519PublicKeyVersionByte) {
      return false;
    }

    const computedChecksum = cryptoUtils.numberToHex(swap16(crc.crc16xmodem(bytes.slice(0, -2))), 4);
    const checksum = cryptoUtils.toHex(bytes.slice(-2));

    return computedChecksum === checksum;
  },
};
