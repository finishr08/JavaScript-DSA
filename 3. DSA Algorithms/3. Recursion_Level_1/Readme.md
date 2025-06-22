## 📘 Recursion JavaScript

This file contains a set of basic JavaScript programs demonstrating **recursion** and **loop constructs** to solve common problems like printing strings, number sequences, factorials, Fibonacci series, etc.

---

### 1. Print a String `n` Times Using Recursion

```javascript
function StringLetter(n) {
  if (n == 0) return;
  console.log("Mustafa Ahmed");
  StringLetter(n - 1);
}

StringLetter(5);
```

**Output:**

```
Mustafa Ahmed
Mustafa Ahmed
Mustafa Ahmed
Mustafa Ahmed
Mustafa Ahmed
```

---

### 2. Print Numbers from `n` to `1` Using Recursion (Reverse Order)

```javascript
function printN(n) {
  if (n == 0) return;
  console.log(n);
  printN(n - 1);
}

printN(5);
```

**Output:**

```
5
4
3
2
1
```

---

### 3. Print Numbers from `1` to `n` Using Recursion

```javascript
function printN(n) {
  if (n == 0) return;
  printN(n - 1);
  console.log(n);
}

printN(5);
```

**Output:**

```
1
2
3
4
5
```

---

### 4. Sum of First `n` Natural Numbers Using Recursion

```javascript
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(5));
```

**Output:**

```
15
```

---

### 5. Factorial of a Number Using Recursion

```javascript
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
```

**Output:**

```
120
```

---

### 6. Fibonacci Series Using `for` Loop

```javascript
let n = 10;
let ft = 0,
  sd = 1;

process.stdout.write(ft + " " + sd + " ");
for (let i = 1; i <= n - 2; i++) {
  let th = ft + sd;
  ft = sd;
  sd = th;
  process.stdout.write(th + " ");
}
```

**Output:**

```
0 1 1 2 3 5 8 13 21 34
```

---

### 7. Fibonacci Series Using Recursion

```javascript
function fibonacci(n, a = 0, b = 1) {
  if (n === 0) return;
  process.stdout.write(a + " ");
  fibonacci(n - 1, b, a + b);
}

fibonacci(10);
```

**Output:**

```
0 1 1 2 3 5 8 13 21 34
```

---

### 8. Print the `n`th Term in Fibonacci Series (Using Recursion)

```javascript
function fibnacci(n) {
  if (n == 0 || n == 1) return n;
  return fibnacci(n - 1) + fibnacci(n - 2);
}

let n = 6;
console.log(fibnacci(n));
```

**Output:**

```
8
```

### 9. HCF (Higest Common Factor) (Using Recursion)

```javascript
function hcf(a, b) {
  if (b == 0) return a;
  return hcf(b, a % b);
}
console.log("H.C.F" + " = " + hcf(32, 20));
```

**Output:**

```
8
```
