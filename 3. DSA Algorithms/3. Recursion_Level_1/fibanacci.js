// Fibnacci Series using Foor Loop

// let n = 10;
// let ft = 0,
//   sd = 1;

// process.stdout.write(ft + " " + sd + " ");
// for (let i = 1; i <= n - 2; i++) {
//   let th = ft + sd;
//   ft = sd;
//   sd = th;
//   process.stdout.write(th + " ");
// }

// Fibannci Series using recursion

function fibonacci(n, a = 0, b = 1) {
  if (n === 0) return;
  process.stdout.write(a + " ");
  fibonacci(n - 1, b, a + b);
}

fibonacci(10);

// Print the nth Term in Fibnacci Series

// function fibnacci(n) {
//   if (n == 0 || n == 1) return n;
//   return fibnacci(n - 1) + fibnacci(n - 2);
// }
// let n = 6;

// console.log(fibnacci(n));
