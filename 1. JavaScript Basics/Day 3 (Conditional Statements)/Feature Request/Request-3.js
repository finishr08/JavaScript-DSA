/*
Feature Request:
3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
*/

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