
/* flick switch function */


function flickSwitch(arr) {
  let flag = true;
  let newList = [];
  for (let item of arr) {
    if (item === "flick") {
      flag = !flag;
      newList.push(flag);
    } else {
      newList.push(flag);
    }
  }
  return newList;
}
