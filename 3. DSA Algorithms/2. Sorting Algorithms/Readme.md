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

## 🟩 Merge Sort

### 📜 Code:

```javascript
function conqour(arr, first, mid, last) {
  // Create a temporary array to store the merged elements
  let temp = new Array(last - first + 1);

  // i → starting index of left half
  // j → starting index of right half
  // k → index for temp array
  let i = first,
    j = mid + 1,
    k = 0;

  // Compare and merge elements from both halves into temp
  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++]; // Left element is smaller
    } else {
      temp[k++] = arr[j++]; // Right element is smaller or equal
    }
  }

  // Copy remaining elements from the left half (if any)
  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  // Copy remaining elements from the right half (if any)
  while (j <= last) {
    temp[k++] = arr[j++];
  }

  // Copy sorted elements back into the original array
  let p = 0,
    t = first;
  while (p < temp.length) {
    arr[t++] = temp[p++];
  }
}

function divide(arr, first, last) {
  // Base case: stop recursion when array cannot be divided further
  if (first >= last) return;

  // Find the middle index to split the array
  let mid = Math.floor((first + last) / 2);

  // Recursively divide the left half
  divide(arr, first, mid);

  // Recursively divide the right half
  divide(arr, mid + 1, last);

  // Merge the sorted left and right halves
  conqour(arr, first, mid, last);
}

let arr = [8, 2, 1, 4, 6, 3, 12, 11, 5]; // Original unsorted array

// Call divide function with full array range
divide(arr, 0, arr.length - 1);

// Print the sorted array
console.log(arr);
```

### ✅ Output:

```
[1, 2, 3, 4, 5, 6, 8, 11, 12]
```

## 🟩 Quick Sort

### 📜 Code:

```javascript
// Helper function to swap two elements in the array
function swap(arr, i, j) {
  let temp = arr[i]; // Store arr[i] in a temporary variable
  arr[i] = arr[j]; // Replace arr[i] with arr[j]
  arr[j] = temp; // Assign the stored value to arr[j]
}

// This function finds the correct position (index) of the pivot element
function findPivotIdx(arr, first, last) {
  let pivot = arr[first]; // Choose the first element as pivot
  let i = first + 1; // Start checking from the next element
  let j = last; // Start from the last element

  // Loop until the two pointers cross
  while (i <= j) {
    // Move `i` forward while arr[i] is less than or equal to pivot
    while (i <= last && arr[i] <= pivot) i++;

    // Move `j` backward while arr[j] is greater than pivot
    while (j <= last && arr[j] > pivot) j--;

    // If valid, swap the two elements that are out of place
    if (i < j) {
      swap(arr, i, j);
    }
  }

  // After the loop, place the pivot in its correct position
  swap(arr, j, first);

  // Return the index where pivot is now placed
  return j;
}

// Main Quick Sort function that recursively sorts the array
function quickSort(arr, first, last) {
  if (first >= last) return; // Base case: if the array has 1 or 0 elements

  // Find the pivot index by placing pivot at correct position
  let pIdx = findPivotIdx(arr, first, last);

  // Recursively sort the elements before the pivot
  quickSort(arr, first, pIdx - 1);

  // Recursively sort the elements after the pivot
  quickSort(arr, pIdx + 1, last);
}

// Initial unsorted array
let arr = [8, 2, 1, 4, 6, 3, 12, 11, 5];

// Call quickSort with the full range of the array
quickSort(arr, 0, arr.length - 1);

// Print the sorted array
console.log(arr);
```

### ✅ Output:

```
[1, 2, 3, 4, 5, 6, 8, 11, 12]
```

## 🟩 Cyclic Sort

### 📜 Code:

```javascript
let arr = [8, 2, 1, 4, 6, 3, 7, 5];

let i = 0;
while (i < arr.length) {
  let correctIdx = arr[i] - 1;

  if (arr[i] != arr[correctIdx]) {
    let temp = arr[i];
    arr[i] = arr[correctIdx];
    arr[correctIdx] = temp;
  } else i++;
}
console.log(arr);
```

### ✅ Output:

```
[1, 2, 3, 4, 5, 6, 7, 8]
```

---
