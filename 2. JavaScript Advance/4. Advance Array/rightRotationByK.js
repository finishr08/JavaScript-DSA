let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let j = 0; j < k; j++) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
}

console.log(arr);
