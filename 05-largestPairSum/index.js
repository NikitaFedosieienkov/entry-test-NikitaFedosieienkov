/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
  const proxy = [...numbers];
  const max = Math.max(...proxy);
  proxy.splice(proxy.findIndex(item => item === max), 1);
  const preMax = Math.max(...proxy);

  return max + preMax;
}
