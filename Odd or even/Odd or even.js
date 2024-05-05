// odd or even
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

// Option 2
function evenOrOdd2(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

let number = prompt("enter a number");
let oddOrEven = number % 2 === 0 ? "even" : "odd";
alert(oddOrEven);
