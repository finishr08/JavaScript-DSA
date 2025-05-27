/*
Activity 1: Function Declaration
Task 1: Write a function to check if a number is even or odd and log the result to the console.
Task 2: Write a function to calculate the square of a number and return the result.
*/

// Task-1

function checkCondition(){
    let num = 7;
    let message = (num%2 === 0) ? "The number is even" : "Number is Odd";
    console.log(message);
}

checkCondition();


// Task-2

function square(n) {
    console.log(n*n);
}
square(2);
