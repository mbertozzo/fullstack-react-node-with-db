/**
 * Create new object with only the key/value
 * pairs passed as argument
 * @param {Object} data - the original object
 * @param {Array} keys - keys to preserve
 */
function pick(data, keys) {
  const result = {};

  keys.forEach(key => {
    if (key in data) {
      result[key] = data[key];
    }
  });

  return result;
}

/**
 * Check if provided object contains all
 * the keys passed as argument
 * @param {Object} data - the object to check
 * @param {Array} keys - keys that must exist
 */
function hasProperties(data, keys) {
  return keys.every(key => key in data);
}

/**
 * Check if provided argument is a number
 * @param {Number} n - the value to check
 */
function isNumber(n) {
  return /^[0-9]+$/.test(n);
}

module.exports = {
  pick,
  hasProperties,
  isNumber,
};
