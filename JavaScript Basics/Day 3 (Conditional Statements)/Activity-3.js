/*
Activity 3: Switch Case
• Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day
name to the console.
Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console
*/

// Task-4

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Invalid day number';
            break;
    }
    return dayName;
}

let dayNumber = parseInt(prompt("Enter a number (1-7) to get the day of the week: "));
let dayName = getDayName(dayNumber);
console.log(`The day is: ${dayName}`);

// Task-5

// Function to get the grade based on a score
function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
            break;
    }
    return grade;
}

let score = parseInt(prompt("Enter the score (0-100): "));
let grade = getGrade(score);
console.log(`The grade is: ${grade}`);
