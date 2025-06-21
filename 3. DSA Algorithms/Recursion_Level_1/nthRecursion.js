// Print "String" to nth term using Recursion

function StringLetter(n) {
  if (n == 0) return;
  console.log("Mustafa Ahmed");
  StringLetter(n - 1);
}

StringLetter(5);

// Reverse Print from n to 1

// function printN(n) {
//   if (n == 0) return;
//   console.log(n);
//   printN(n - 1);
// }

// printN(5);

// print from 1 to n

function printN(n) {
  if (n == 0) return;
  printN(n - 1);
  console.log(n);
}

printN(5);
