let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number: "));

console.log("Square pattern");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "* ";
  }
  console.log(row);
}
