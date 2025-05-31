let input = prompt("Enter the String: ");

let pallidrome = true;
let i = 0,
  j = input.length - 1;

while (i < j) {
  if (input.charAt(i) != input.charAt(j)) {
    pallidrome = false;
    break;
  }
  i++;
  j--;
}

if (pallidrome) console.log("PalliDrome");
else console.log("No pallidrome");
