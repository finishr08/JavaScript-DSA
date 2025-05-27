/*
Feature Request:
1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
*/

function checkCondition(){
    let num = 7;
    let message = (num%2 === 0) ? "The number is even" : "Number is Odd";
    console.log(message);
}

checkCondition();