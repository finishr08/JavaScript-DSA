## JavaScript Sorting Algorithms

### 🚀 Description

This project demonstrates three fundamental **sorting algorithms** written in JavaScript:

- Bubble Sort
- Selection Sort
- Insertion Sort

Each algorithm is explained with **clear code comments**, and the output shows how the original unsorted array is transformed into a sorted array.

---

### 📂 Files Included

- `bubbleSort.js`
- `selectionSort.js`
- `insertionSort.js`

---

## 🔢 Bubble Sort

### 📜 Code:

```javascript
// Initialize an array with unsorted numbers
let arr = [12, 1, 3, 2, 7, 4];

// Display the original unsorted array
console.log(`UnSorted Array: ${arr}`);

// Get the total number of elements in the array
let n = arr.length;

// Start of Bubble Sort algorithm
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// Display the sorted array after all passes
console.log(`Sorted Array: ${arr}`);
```

### ✅ Output:

```
UnSorted Array: 12,1,3,2,7,4
Sorted Array: 1,2,3,4,7,12
```

---

## 🟨 Selection Sort

### 📜 Code:

```javascript
let arr = [12, 1, 3, 2, 7, 4];
console.log(`UnSorted Array: ${arr}`);
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minIdx = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minIdx] > arr[j]) {
      minIdx = j;
    }
  }
  if (minIdx != i) {
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
}
console.log(`Sorted Array: ${arr}`);
```

### ✅ Output:

```
UnSorted Array: 12,1,3,2,7,4
Sorted Array: 1,2,3,4,7,12
```

---

## 🟩 Insertion Sort

### 📜 Code:

```javascript
let arr = [12, 1, 3, 2, 7, 4];
console.log(`UnSorted Array: ${arr}`);
let n = arr.length;

for (let i = 1; i < n; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log(`Sorted Array: ${arr}`);
```

### ✅ Output:

```
UnSorted Array: 12,1,3,2,7,4
Sorted Array: 1,2,3,4,7,12
```

---
