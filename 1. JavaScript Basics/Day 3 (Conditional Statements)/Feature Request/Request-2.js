/*
Feature Request:
2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result. 
*/

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