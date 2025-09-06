module.exports = function reverse(n) {
  const str = n.toString().split('');
  const ret = [];
  for (let i = 0; i < str.length; i += 1) {
    ret.unshift(str[i]);
  }
  return parseInt(ret.join(''), 10);
};
