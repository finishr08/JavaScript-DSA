/*
Activity 2: Nested If-Else Statements
• Task 3: Write a program to find the largest of three numbers using nested if-else statements.
*/

// Task-3

let largestNumber = (a, b, c) => {

    if (a>b){
        if(a>c){
            console.log(`a is the Greatest Number ${a}`);
        }
    } else if (b>c){
        console.log(`b is the Greatest Number ${b}`);
    } else {
        console.log(`c is the Greatest Number ${c}`);
    }
}

largestNumber(4,6,7);