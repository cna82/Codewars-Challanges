/* calculates the power of number 2 from zero to n 
ex : n=5 => [1,2,4,8,16,32] */

function powersOfTwo(n) {
  let powLists = [];
  for (let i = 0; i <= n; i++) {
    powLists.push(Math.pow(2, i));
  }
  return powLists;
}
