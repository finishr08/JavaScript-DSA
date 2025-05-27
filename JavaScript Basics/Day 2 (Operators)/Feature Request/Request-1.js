/*
Feature Request:
1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
*/

let basicCalculator = (a, b) => {
    if (a >= 0 && b >= 0) {
        console.log(`Addition: ${a + b}`);
        console.log(`Subtraction: ${a - b}`);
        console.log(`Multiplication: ${a * b}`);
        console.log(`Divide: ${a / b}`);
        console.log(`Remainder: ${a % b}`);
    } else {
        console.log("Please provide non-negative numbers.");
    }
}

basicCalculator(10, 3);

