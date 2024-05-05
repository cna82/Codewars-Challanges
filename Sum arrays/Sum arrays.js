// Sum Numbers of an array
function sum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    let sumOfNumbers = numbers[i];
    sum += sumOfNumbers;
  }
  return sum;
}
