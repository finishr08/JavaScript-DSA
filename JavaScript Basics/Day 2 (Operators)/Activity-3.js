/*
Activity 3: Comparison Operators
Task 8: Write a program to compare two numbers using > and < and log the result to the console.
Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/

// Task-8

let compareNumber = () => {
    let a = 7;
    if (a > 5) {
        console.log(`Number is greater than 5`);
    } else if (a < 5) {
        console.log(`Number is less than 5`);
    }
};

compareNumber();  


// Task-9

let compareNumber1 = () => {
    let a = 7;
    if (a >= 5) {
        console.log(`Number is greater than or equal to 5`);
    } else if (a <= 5) {
        console.log(`Number is less than 5`);
    }
};

compareNumber1();  


// Task-10

let compareNumber2 = () => {
    let a = 5;
    if (a == "5") {
        console.log(`Number is equal to 5`);
    }
};

compareNumber2(); 

let compareNumber3 = () => {
    let a = 5;
    if (a === 5) {
        console.log(`Number is equal to 5 and its Data Type is Number`);
    }
};

compareNumber3(); 