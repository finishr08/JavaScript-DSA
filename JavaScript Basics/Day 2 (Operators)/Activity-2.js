/*
Activity 2: Assignment Operators
Task 6: Use the operator "a+=b" to add a number to a variable and log the result to the console.
Task 7: Use the operator "a-=b" to subtract a number from a variable and log the result to the console
*/

// Task-6

let addNum = (a, b) => {
    a += b;
    return a;
};

let result = addNum(7, 8);  
console.log(result);        


// Task-7

let subNum = (a, b) => {
    a -= b;
    return a;
};

let output = subNum(7, 8);  
console.log(output);