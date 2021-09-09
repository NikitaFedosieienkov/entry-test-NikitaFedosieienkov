/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const proxy = string.split('').reduce((acc, item) => {
    const proxy = {...acc};
    if(proxy[item]){
      proxy[item] = proxy[item] + 1;
    } else {
      proxy[item] = 1;
    }
  }, {})
  return Object.entries(proxy).map(item => item[0].repeat(item[1] > 3 ? 3 : item[1]));
}
