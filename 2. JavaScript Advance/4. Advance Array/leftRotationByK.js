/** 
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let j = 0; j < k; j++) {
  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
}

console.log(arr);

// Better Approach

let arr = [1, 2, 3, 4, 5];
let tempArray = new Array(arr.length);
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
  tempArray[i] = arr[(i - k + arr.length) % arr.length];
}
console.log(tempArray);

*/

// Two Pointer Technique

let arr = [1, 2, 3, 4, 5];

let k = Number(prompt("Enter the value of k: "));
k = k % arr.length;

function Reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

Reverse(0, k - 1);
Reverse(k, arr.length - 1);
Reverse(0, arr.length - 1);
console.log(arr);
