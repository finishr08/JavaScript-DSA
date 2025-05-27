/*
Activity 3: Do... While Loop
• Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
• Task 6: Write a program to calculate the factorial of a number using a do...while loop.
*/

// Task-5

let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);


// Task-6

let i = 5;
let factorial = 1;

do {
    factorial *= i;
    i--;
} while (i > 0);
console.log(factorial);
