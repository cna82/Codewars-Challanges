function makeNegative(num) {
  // Code?
  if (num <= 0) {
    return num;
  }
  return -num;
}
//   option 2
function makeNegative2(num) {
  return -Math.abs(num);
}
