/*
Activity 2: Function Expression
Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
Task 4: Write a function expression to concatenate two strings and return the result.
*/

// Task-3

const findMax = function(a, b) {
    return a > b ? a : b;
  };
  
console.log(findMax(10, 20));

// Task-4

const concatenateString = function(str1, str2) {
    return str1 + str2
  };
  
console.log(concatenateString("Mustafa", " Ahmed"));
  