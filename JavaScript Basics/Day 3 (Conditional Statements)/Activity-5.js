/*
Activity 5: Combining Conditions
• Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
*/

let year = 2024;

let output = (year%4 ===0 )? "Leap Year" : "Simple year";
console.log(output);