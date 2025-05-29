/*
Activity 5: Higher-Order Functions
Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
*/

// Task-9

const repeatFunction = (func, num) => {
    for (let i = 0; i < num; i++) {
        func();
    }
};

const sayHello = () => {
    console.log("Hello!");
};

repeatFunction(sayHello, 3); // "Hello!" will be logged 3 times


// Task-10


const applyFunctions = (func1, func2, value) => {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
};

const double = (x) => x * 2;
const square = (x) => x * x;

const result = applyFunctions(double, square, 5); // (5 * 2) ^ 2 = 10 ^ 2 = 100
console.log(result); // 100
