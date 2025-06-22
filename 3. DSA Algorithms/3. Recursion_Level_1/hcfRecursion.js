function hcf(a, b) {
  if (b == 0) return a;
  return hcf(b, a % b);
}
console.log("H.C.F" + " = " + hcf(32, 20));
