## 🧠 What is Time and Space Complexity?

**Time Complexity** measures how the runtime of an algorithm grows as the input size increases.

**Space Complexity** measures the total memory an algorithm uses as the input size increases.

These complexities are expressed using three notations:

- **Big O Notation (`O`)**: Describes the **upper bound** – the **worst-case** performance of an algorithm.
- **Theta Notation (`Θ`)**: Describes the **tight bound** – the **average-case** or **exact** performance when best and worst cases are the same.
- **Omega Notation (`Ω`)**: Describes the **lower bound** – the **best-case** performance of an algorithm.

Common examples include:
`O(1)`, `Θ(n)`, `Ω(log n)`, etc., depending on how the algorithm behaves in different cases.

---

## ⏰ Time Complexity: Types & Explanation

| Type         | Big O        | Explanation                                               |
| ------------ | ------------ | --------------------------------------------------------- |
| Constant     | `O(1)`       | Time stays the same regardless of input size.             |
| Linear       | `O(n)`       | Time grows proportionally with input size.                |
| Logarithmic  | `O(log n)`   | Cuts the problem in half each time (e.g., binary search). |
| Linearithmic | `O(n log n)` | Sorting algorithms like merge sort.                       |
| Quadratic    | `O(n²)`      | Nested loops over the same input.                         |
| Cubic        | `O(n³)`      | 3 nested loops.                                           |
| Exponential  | `O(2^n)`     | Recursion that splits into two calls each time.           |
| Factorial    | `O(n!)`      | All permutations of n elements.                           |

---

## 💾 Space Complexity: Types & Explanation

| Type        | Big O    | Explanation                           |
| ----------- | -------- | ------------------------------------- |
| Constant    | `O(1)`   | Uses a fixed amount of memory.        |
| Linear      | `O(n)`   | Memory grows proportionally to input. |
| Quadratic   | `O(n²)`  | Matrix or 2D arrays.                  |
| Exponential | `O(2^n)` | Recursive calls with branching.       |

---

## 📘 Complexity Notations Overview

| Notation  | Name  | Meaning                                                                   |
| --------- | ----- | ------------------------------------------------------------------------- |
| `O(f(n))` | Big O | **Upper Bound** – Worst-case performance.                                 |
| `Ω(f(n))` | Omega | **Lower Bound** – Best-case performance.                                  |
| `Θ(f(n))` | Theta | **Tight Bound** – Exact/average performance (both upper and lower bound). |

> 🔑 **Rule of thumb**:
>
> - Use **Big O** when analyzing worst case.
> - Use **Ω (Omega)** for best-case.
> - Use **Θ (Theta)** when best and worst cases are the same.

---

## ✅ JavaScript Code Examples

---

### 🔹 Example 1: Constant Time - O(1)

```js
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([10, 20, 30])); // Output: 10
```

**Time Complexity:** `O(1)` → Always accesses the first element.

**Space Complexity:** `O(1)` → No additional space used.

---

### 🔹 Example 2: Linear Time - O(n)

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

**Time Complexity:** `O(n)` → Loop runs once per element.

**Space Complexity:** `O(1)` → Only a few variables used.

---

### 🔹 Example 3: Quadratic Time - O(n²)

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs([1, 2, 3]);
```

**Output:**

```
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

**Time Complexity:** `O(n²)` → Two nested loops over `n`.

**Space Complexity:** `O(1)` → Only loop counters used.

---

### 🔹 Example 4: Logarithmic Time - O(log n)

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Output: 3
```

**Time Complexity:** `O(log n)` → Cuts array in half each iteration.

**Space Complexity:** `O(1)` → Uses fixed variables.

---

### 🔹 Example 5: Exponential Time - O(2^n)

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
```

**Time Complexity:** `O(2^n)` → Each call spawns two more calls.

**Space Complexity:** `O(n)` → Depth of recursive call stack.

---

### 🔹 Example 6: Linearithmic Time - O(n log n)

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 1, 4, 2])); // Output: [1, 2, 3, 4]
```

**Time Complexity:** `O(n log n)` → Divide and conquer.

**Space Complexity:** `O(n)` → Creates new arrays during merging.

---

## 📌 Summary Table

| Example        | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Access element | `O(1)`          | `O(1)`           |
| Sum array      | `O(n)`          | `O(1)`           |
| Nested loop    | `O(n²)`         | `O(1)`           |
| Binary search  | `O(log n)`      | `O(1)`           |
| Fibonacci      | `O(2^n)`        | `O(n)`           |
| Merge Sort     | `O(n log n)`    | `O(n)`           |

---
