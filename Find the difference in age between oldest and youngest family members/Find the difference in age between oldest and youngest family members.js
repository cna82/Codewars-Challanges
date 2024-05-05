// Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
  let newList = [];
  let youngest = Math.min(...ages);
  let oldest = Math.max(...ages);
  let difference = oldest - youngest;
  newList.push(youngest);
  newList.push(oldest);
  newList.push(difference);
  return newList;
}
// option 2
function differenceInAges2(ages) {
  let max = Math.max(...ages),
    min = Math.min(...ages);
  diff = max - min;

  return [min, max, diff];
}
console.log(Math.min(...[5, 10, 15, 25, 100]));
console.log(Math.max(...[5, 10, 15, 25, 100]));
// Option 3
function differenceInAges3(ages) {
  let youngest = Math.min(...ages);
  let oldest = Math.max(...ages);
  let difference = oldest - youngest;
  let newList = [youngest, oldest, difference];
  return newList;
}
