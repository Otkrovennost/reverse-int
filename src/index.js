module.exports = function reverse (n) {
    if(n < 0) {
        n =  n * -1
      } else {
        n = n;
      }
      n = String(n);
      return n.split('').reverse().join('');
}
