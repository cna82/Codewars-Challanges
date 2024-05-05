function take(arr, n) {
  if (n <= arr.length) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      let nItem = arr[i];
      newArr.push(nItem);
    }
    return newArr;
  }
  return arr;
}
// option 2 better option to be used
function take2(arr, n) {
  return arr.slice(0, n);
}
