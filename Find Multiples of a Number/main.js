function findMultiples(integer, limit) {
  //your code here
  let empty = [];
  let first = 1;
  while (integer * first <= limit) {
    empty.push(integer * first);
    first++;
  }
  return empty;
}

// option 2
function findMultiples2(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}
