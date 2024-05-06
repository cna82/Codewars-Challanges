function multiply(number) {
  let numberStringLength = String(Math.abs(number)).length;
  let result = number * Math.pow(5, numberStringLength);
  return result;
}
