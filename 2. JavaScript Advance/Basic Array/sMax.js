let arr = [1, 2, 0, 34, 56, 97, 47, 89, 99, 77];

let max = Math.max(arr[0], arr[1]); // find max from 0 to 1
let sMax = Math.min(arr[0], arr[1]); // find min from 0 to 1

for (let i = 2; i < arr.length; i++) {

  if (max < arr[i]) {
    sMax = max;    // first update sMax
    max = arr[i];  // Then max update
  } else if (arr[i] > sMax && max != arr[i]) {
    sMax = arr[i]; 
  }
}
console.log(sMax);
