/*
Activity 5: Loop Control Statements
• Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
• Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
*/

// Task-8

for (let index = 1; index < 10; index++) {
    if (index == 5){
        continue;
    }
    const element = index;
        console.log(element);
}


// Task-9

for (let index = 1; index < 10; index++) {
    if (index == 7){
        break;
    }
    const element = index;
        console.log(element);
}