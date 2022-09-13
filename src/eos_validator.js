function isValidEOSAddress(address, currency, networkType) {
  const regex = /^[a-z0-9.]+$/g; // Must be numbers, lowercase letters and decimal points only
  if (address.search(regex) !== -1 && address.length === 12) {
    return true;
  }
  return false;
}

module.exports = {
  isValidAddress(address, currency, networkType) {
    return isValidEOSAddress(address, currency, networkType);
  },
};
