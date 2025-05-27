/*
Feature Request:
1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs
the result.
*/

let checkConditionNumber = (num)=>{
    if (num <= 0){
        console.log("The Number is Negative or Zero.");
    } else if (num >= 1){
        console.log("The Number is Positive.");
    } else {
        console.log("Something went Wrong!");
    }
}

checkConditionNumber(3);