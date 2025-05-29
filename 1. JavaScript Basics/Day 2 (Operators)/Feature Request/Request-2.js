/*
Feature Request:
2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the
results.
*/

let compareNumbers = (a, b) => {
    console.log(`a = ${a}, b = ${b}`);
    
    // Comparison using different operators
    console.log(`a > b: ${a > b}`);
    console.log(`a >= b: ${a >= b}`);
    console.log(`a < b: ${a < b}`);
    console.log(`a <= b: ${a <= b}`);
    console.log(`a === b: ${a === b}`);
    console.log(`a !== b: ${a !== b}`);
    
    // Combining conditions using logical operators
    console.log(`a > 0 && b > 0: ${a > 0 && b > 0}`);
    console.log(`a > 0 || b > 0: ${a > 0 || b > 0}`);
    console.log(`!(a > b): ${!(a > b)}`);
};


compareNumbers(5, 3);
