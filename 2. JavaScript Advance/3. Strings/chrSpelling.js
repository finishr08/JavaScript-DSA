let str = prompt("Enter the String: ");
let arr = new Array(128).fill(0);

for (let i = 0; i < str.length; i++) {
  let indx = str.charCodeAt(i);
  arr[indx] += 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(`${String.fromCharCode(i)} Appears at ${arr[i]} times`);
  }
}
