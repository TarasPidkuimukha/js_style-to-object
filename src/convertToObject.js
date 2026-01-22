'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, currentValue) => {
    const [key, value] = currentValue.split(':');
    const trimmedKey = key?.trim();
    const trimmedValue = value?.trim();

    if (!trimmedKey || !trimmedValue) {
      return acc;
    }
    acc[trimmedKey] = trimmedValue;

    return {
      ...acc,
      [trimmedKey]: trimmedValue,
    };
  }, {});
}

module.exports = convertToObject;

// .filter(s => s !=='') s - це елемент styles[i]
