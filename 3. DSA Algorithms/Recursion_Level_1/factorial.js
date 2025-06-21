// Factorial of n i.e factorial of 3 is 3 * 2 * 1 => 6

function factorial(n) {
  if (n == 1) return n;

  return n * factorial(n - 1);
}

console.log(factorial(5));
