let arr = [1, 2, 3, 4, 5, 6, 7];

let i = 0,
  j = arr.length - 1;
let temp = 0;

while (i != j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log(arr);
