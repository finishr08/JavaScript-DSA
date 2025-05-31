// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter the number: "));

// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number: "));

for (let i = n; i >= 1; i--) {
  let num = 1;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(num + " ");
    num++;
  }
  console.log();
}

