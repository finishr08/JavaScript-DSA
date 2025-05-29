let arr = [1, 2, 0, 34, 56, 97, 47, 89, 99, 77];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
