/* collinearity test js
 */
/* my solution
 */
function collinearity(x1, y1, x2, y2) {
  let avali = x1 * y2;
  let dovomi = x2 * y1;

  if (avali === dovomi) {
    return true;
  } else {
    return false;
  }
}
/* other solutions:
 */
function collinearity2(x1, y1, x2, y2) {
  return x1 * y2 === y1 * x2;
}
