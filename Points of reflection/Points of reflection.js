function symmetricPoint(p, q) {
  const [xp, yp] = p;
  const [xq, yq] = q;
  const xDistance = (xp - xq) * -1;
  const yDistance = (yp - yq) * -1;

  return [xq + xDistance, yq + yDistance];
}
/* other solutions : */
function symmetricPoint2(p, q) {
    return [2*q[0] - p[0], 2*q[1]  - p[1]]; 
}