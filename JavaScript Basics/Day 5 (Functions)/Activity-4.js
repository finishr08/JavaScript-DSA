/*
Activity 4: Function Parameters and Default Values
Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
*/

// Task-7

function product(a,b=" ahmed") {
    return a + b;
}
product("Mustafa");


// Task-8

function bio(name,age) {
    return `Greetings! ${name} your age is ${age}`
}
bio("Mustafa", 20);