/*
Activity 1: If-Else Statements
• Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
• Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
*/

// Task-1

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


// Task-2

let checkConditionVote = (age)=>{
    if (age >= 18){
        console.log("Person can vote.");
    } else if (age < 18){
        console.log("Person cannot vote.");
    } else {
        console.log("Something went Wrong!");
    }
}

checkConditionVote(19);