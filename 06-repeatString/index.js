/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => str.split('').reduce((acc, item, index) => {
  const proxy = item.repeat(index + 1).split('');
  proxy[0] = proxy[0].toUpperCase();
  return acc + `${index ? '-' : ''}${proxy.join('')}`;
}, '');
