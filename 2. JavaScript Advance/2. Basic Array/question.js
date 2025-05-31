// Minimum Num

// let arr = [1, 2, 34, 56, 97, 47, 89, 99, 77];

// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// 2nd Minimum

// let arr = [1, 2, 34, 56, 97, 47, 89, 99, 77];

// let min = Math.min(arr[0], arr[1]); // find min from 0 to 1
// let sMin = Math.min(arr[0], arr[1]); // find min from 0 to 1

// for (let i = 2; i < arr.length; i++) {
//   if (min > arr[i]) {
//     sMin = min; // first update sMin
//     min = arr[i]; // Then min update
//   } else if (arr[i] < sMin && min != arr[i]) {
//     sMin = arr[i];
//   }
// }
// console.log(sMin);

// Negative left side and Positive  Right side

let arr = [2, 5, 3, -1, -2, 3, -4, 5, 6, 7];

let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr);
