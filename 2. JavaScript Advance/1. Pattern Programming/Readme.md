## JavaScript Pattern Programming

This document contains JavaScript code snippets to print various patterns using loops and `prompt-sync` for input. Each section includes the code and its output example.

---

## Square Pattern

### Code:

```javascript
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "* ";
  }
  console.log(row);
}
```

### Output (n = 4):

```
* * * *
* * * *
* * * *
* * * *
```

---

## Right-Angled Triangle (Stars)

### Code:

```javascript
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
```

### Output (n = 4):

```
*
* *
* * *
* * * *
```

---

## Right-Angled Triangle (Numbers)

### Code:

```javascript
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
```

### Output (n = 4):

```
1
1 2
1 2 3
1 2 3 4
```

---

## Reverse Right-Angled Triangle (Stars)

### Code:

```javascript
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
```

### Output (n = 4):

```
* * * *
* * *
* *
*
```

---

## Reverse Right-Angled Triangle (Numbers)

### Code:

```javascript
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
```

### Output (n = 4):

```
1 2 3 4
1 2 3
1 2
1
```

---

## How to Run

1. Save any of the code snippets into a `.js` file (e.g., `pattern.js`).
2. Make sure `prompt-sync` is installed:

```bash
npm install prompt-sync
```

3. Run the file using Node.js:

```bash
node fileName.js
```

---

## Author

These examples are created for educational purposes to demonstrate how to use loops for pattern printing in JavaScript.
