## Basic Array Operations

This document explains JavaScript array operations such as adding elements, finding maximum/minimum values, reversing arrays, summing elements, and rearranging content. Each block includes the code, an explanation, and the expected output.

---

### 1. Pushing Elements to an Array

```js
let arr = [];
arr.push(21);
arr.push(22);
arr.push(23);
console.log(arr);
```

**Explanation:** Adds elements to the array using `push()`.

**Output:**

```
[21, 22, 23]
```

---

### 2. Sum of Array Elements

```js
let arr = [1, 22, 34, 55, 78, 56];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
```

**Explanation:** Adds all elements in the array.

**Output:**

```
246
```

---

### 3. Finding Maximum Value in an Array

```js
let arr = [1, 2, 0, 34, 56, 97, 47, 89, 99, 77];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
```

**Explanation:** Iterates to find the largest value.

**Output:**

```
99
```

---

### 4. Finding Minimum Value in an Array

```js
let arr = [1, 2, 34, 56, 97, 47, 89, 99, 77];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
```

**Explanation:** Tracks the smallest number.

**Output:**

```
1
```

---

### 5. Second Maximum Value

```js
let arr = [1, 2, 0, 34, 56, 97, 47, 89, 99, 77];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (max < arr[i]) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {
    sMax = arr[i];
  }
}
console.log(sMax);
```

**Explanation:** Tracks the largest and second largest values.

**Output:**

```
97
```

---

### 6. Second Minimum Value

```js
let arr = [1, 2, 34, 56, 97, 47, 89, 99, 77];
let min = Math.min(arr[0], arr[1]);
let sMin = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (min > arr[i]) {
    sMin = min;
    min = arr[i];
  } else if (arr[i] < sMin && min != arr[i]) {
    sMin = arr[i];
  }
}
console.log(sMin);
```

**Explanation:** Tracks the smallest and second smallest numbers.

**Output:**

```
2
```

---

### 7. Reversing an Array Using Two-Pointer Approach

```js
let arr = [1, 2, 3, 4, 5, 6, 7];
let i = 0,
  j = arr.length - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);
```

**Explanation:** Swaps elements from both ends to reverse the array.

**Output:**

```
[7, 6, 5, 4, 3, 2, 1]
```

---

### 8. Separate 0s and 1s

```js
let arr = [1, 0, 1, 0, 1, 1, 0, 1, 0, 0];
let i = 0,
  j = 0;
while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);
```

**Explanation:** Pushes all 0s to the start using a two-pointer swap strategy.

**Output:**

```
[0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
```

---

### 9. Negative Numbers on Left, Positive on Right

```js
let arr = [2, 5, 3, -1, -2, 3, -4, 5, 6, 7];
let i = 0,
  j = 0;
while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);
```

**Explanation:** Moves negative numbers to the front of the array.

**Output:**

```
[-1, -2, -4, 5, 3, 3, 2, 5, 6, 7] (order of positive values may vary)
```

---
