/*
Feature Request:
5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
*/

const repeatFunction = (func, num) => {
    for (let i = 0; i < num; i++) {
        func();
    }
};

const sayHello = () => {
    console.log("Hello!");
};

repeatFunction(sayHello, 3);