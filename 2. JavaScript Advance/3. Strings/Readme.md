# 🔤 JavaScript String Manipulation

This project is a collection of beginner-friendly yet powerful JavaScript programs for manipulating and analyzing strings. These scripts demonstrate key concepts such as character traversal, reversal, case toggling, palindrome checking, and frequency counting.

---

## 📌 1. Print Each Character

Prints each character of a string on a new line.

### ✅ Code:

```javascript
let str = "Mustafa Ahmed";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

### 🖨️ Output:

```
M
u
s
t
a
f
a

A
h
m
e
d
```

---

## 📌 2. Print Characters in Reverse

Prints each character in **reverse order**, one per line.

### ✅ Code:

```javascript
let str = "Mustafa Ahmed";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}
```

### 🖨️ Output:

```
d
e
m
h
A

a
f
a
t
s
u
M
```

---

## 📌 3. Palindrome Checker

Checks whether the input string is a **palindrome** (reads the same backward and forward).

### ✅ Code:

```javascript
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
```

### 🖨️ Sample Output:

```
Enter the String: madam
PalliDrome
```

```
Enter the String: hello
No pallidrome
```

> ⚠️ Case-sensitive and includes spaces.

---

## 📌 4. Toggle Character Case

Converts **uppercase letters to lowercase** and vice versa.

### ✅ Code:

```javascript
let str = prompt("Enter the String: ");
console.log(str);

let toggle = "";

for (let i = 0; i < str.length; i++) {
  let ch = str.charCodeAt(i);

  if (ch >= 65 && ch <= 90) {
    toggle += String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle += String.fromCharCode(ch - 32);
  }
}
console.log(toggle);
```

### 🖨️ Sample Output:

```
Enter the String: Hello World
Hello World
hELLO wORLD
```

> ✅ Other characters like spaces, numbers, and punctuation remain unchanged.

---

## 📌 5. Character Frequency Counter

Counts how many times each character appears in the input string using an ASCII frequency array.

### ✅ Code:

```javascript
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
```

### 🖨️ Sample Output:

```
Enter the String: Mustafa
M Appears at 1 times
u Appears at 1 times
s Appears at 1 times
t Appears at 1 times
a Appears at 2 times
f Appears at 1 times
```

> ℹ️ Based on ASCII codes. Case-sensitive and includes spaces/punctuation.

---

## 🚀 Getting Started

You can run these scripts directly in the browser console:

1. Open Developer Tools (Right-click > Inspect)
2. Go to the **Console** tab
3. Copy-paste the code and press **Enter**

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
