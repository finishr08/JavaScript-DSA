// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter the number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }



let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number: "));

for (let i = 1; i <= n; i++) {
  let num = 1;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(num + " ");
    num++;
  }
  console.log();
}
