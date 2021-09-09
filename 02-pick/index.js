/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const proxy = {...obj}
  Object.keys(obj).filter(item => !fields.includes(item)).forEach(item => delete proxy[item])
  return proxy;
};
