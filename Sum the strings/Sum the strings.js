function sumStr(a, b) {
  let no1 = +a;
  let no2 = +b;
  let sum = no1 + no2;
  let sSum = String(sum);
  console.log(sSum);
//   return sum.toString();
}
// option 2
function sumStr2(a, b) {
  return String(+a + +b);
}
