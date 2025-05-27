/*
Feature Request:
5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
*/

let i = 5;
let factorial = 1;

do {
    factorial *= i;
    i--;
} while (i > 0);
console.log(factorial);