'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s && s.includes(':'))
    .map((s) => {
      const [key, ...rest] = s.split(':');

      let value = rest.join(':').trim();

      value = value.replace(/;$/, '').trim();

      return [key.trim(), value];
    })
    .reduce((styles, [key, value]) => {
      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;

// .filter(s => s !=='') s - це елемент styles[i]
