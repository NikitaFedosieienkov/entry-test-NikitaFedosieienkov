export const getLastWordLength = str => {
  const proxy = str.trim().split(' ');
    return proxy[proxy.length - 1].length;
};
