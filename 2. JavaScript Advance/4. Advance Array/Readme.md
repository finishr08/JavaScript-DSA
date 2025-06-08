# 🔄 JavaScript Array Problems & Solutions

This file demonstrates different array manipulation techniques using JavaScript. It includes solutions to problems like:

- Array Rotation (Right & Left)
- Merging Sorted Arrays
- Removing Duplicates
- Maximizing Stock Profit
- Sorting an Array with Limited Values

## 1. 🌀 Array Rotation

Rotate an array by `k` positions either to the **right** or **left**.

---

### 🔁 Right Rotation

#### 1. Brute Force Approach

```js
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let j = 0; j < k; j++) {
  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
}

console.log(arr);
```

```
Input:  [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]
```

---

#### 2. Using a Temporary Array

```js
let arr = [1, 2, 3, 4, 5];
let tempArray = new Array(arr.length);
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
  tempArray[i] = arr[(i - k + arr.length) % arr.length];
}
console.log(tempArray);
```

```
Input:  [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]
```

---

#### 3. Two Pointer Technique (Reversal Algorithm)

```js
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "));
k = k % arr.length;

function Reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

Reverse(0, k - 1);
Reverse(k, arr.length - 1);
Reverse(0, arr.length - 1);
console.log(arr);
```

```
Input:  [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]
```

---

### 🔁 Left Rotation

#### 1. Brute Force Approach

```js
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let j = 0; j < k; j++) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
}

console.log(arr);
```

```
Input:  [1, 2, 3, 4, 5], k = 2
Output: [3, 4, 5, 1, 2]
```

---

#### 2. Using a Temporary Array

```js
let arr = [1, 2, 3, 4, 5];
let tempArray = new Array(arr.length);
let k = Number(prompt("Enter the value of k: "));

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
  tempArray[i] = arr[(i + k) % arr.length];
}
console.log(tempArray);
```

```
Input:  [1, 2, 3, 4, 5], k = 2
Output: [3, 4, 5, 1, 2]
```

---

#### 3. Two Pointer Technique (Reversal Algorithm)

```js
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "));
k = k % arr.length;

function Reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

Reverse(0, arr.length - 1);
Reverse(0, arr.length - k - 1);
Reverse(arr.length - k, arr.length - 1);

console.log(arr);
```

```
Input:  [1, 2, 3, 4, 5], k = 2
Output: [3, 4, 5, 1, 2]
```

---

## 2. 🔀 Merge Two Sorted Arrays

```js
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];
let merge = new Array(arr1.length + arr2.length);
let i = (j = k = 0);

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merge[k++] = arr1[i++];
  } else {
    merge[k++] = arr2[j++];
  }
}

while (j < arr2.length) {
  merge[k++] = arr2[j++];
}

while (i < arr1.length) {
  merge[k++] = arr1[i++];
}

console.log(merge);
```

```
Output:
[1, 1, 2, 2, 3, 3, 4, 4, 5, 6]
```

---

## 3. 🚫 Remove Duplicates from Sorted Array

```js
let nums = [0, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5];

let removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  return j;
};

let length = removeDuplicates(nums);
console.log("New length:", length);
console.log("Modified array:", nums.slice(0, length));
```

```
Output:
New length: 6
Modified array: [0, 1, 2, 3, 4, 5]
```

---

## 4. 💹 Best Time to Buy and Sell Stock

```js
let prices = [7, 1, 5, 3, 6, 4];

let maxProfit = 0;
let min = prices[0];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) min = prices[i];
  let profit = prices[i] - min;
  maxProfit = Math.max(maxProfit, profit);
}

console.log(maxProfit);
```

```
Output:
5
```

---

## 5. 🎨 Sort Colors (Dutch National Flag)

```js
let nums = [2, 0, 2, 1, 1, 2, 0];

let i = 0,
  j = 0,
  k = nums.length - 1;

while (j <= k) {
  if (nums[j] === 0) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j++;
  } else if (nums[j] === 1) {
    j++;
  } else {
    [nums[j], nums[k]] = [nums[k], nums[j]];
    k--;
  }
}

console.log(nums);
```

```
Output:
[0, 0, 1, 1, 2, 2, 2]
```
