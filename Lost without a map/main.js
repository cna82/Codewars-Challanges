function maps(x) {
    let empty = [];
    for (let item of x) {
      item *= 2;
      empty.push(item);
    }
    return empty;
  }
  