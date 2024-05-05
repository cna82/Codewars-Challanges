function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let item = Math.pow(numbers[i], 2);
    sum += item;
  }
  return sum;
}
