export const sameParityFilter = (arr = []) => {
  const isEven = arr[0] % 2 === 0;
  return arr.filter(item => isEven ? Math.abs(item) % 2 === 0 : Math.abs(item) % 2 !== 0)
}
