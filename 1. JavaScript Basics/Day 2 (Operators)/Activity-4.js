/*
Activity 4: Logical Operators
Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
*/

// Task-11

let checkCondition = ()=>{
    a = 5;
    if (a === 5 && a >= 5){
        console.log("Number is Equal to 5 with data type Number");
    }else{
        console.log("Something went wrong!");
    }
}

checkCondition()


// Task-12

let checkCondition1 = ()=>{
    a = 5;
    if (a === 5 || a >= 6){
        console.log("Number is Equal to 5 with data type Number");
    }else{
        console.log("Something went wrong!");
    }
}

checkCondition1()


// Task-13

let checkCondition3 = () => {
    let a = 5;
    if (!(a > 5)) {
        console.log("a is not greater than 5");
    } else {
        console.log("Something went wrong!");
    }
};

checkCondition3(); 
