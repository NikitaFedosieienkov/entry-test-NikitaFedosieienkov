// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  if(!arr.length) return [];
  const proxy = [[]];
     arr.forEach((item, index) => {
      if(index % size === 0 && index !== 0){
        proxy.push([item])
      } else {
        proxy[proxy.length - 1].push(item)
      }
    })
  return proxy;
};
