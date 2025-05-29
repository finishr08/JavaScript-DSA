/*
Activity 3: Arrow Functions
Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
*/

// Task-5

let sum = (a, b) => {
    return a + b;
}
console.log(sum(7,8));

// Task-6

const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("Mustafa", "a")); 
console.log(containsCharacter("Mustafa", "z")); 
