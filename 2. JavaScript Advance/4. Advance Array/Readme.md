# 🔄 JavaScript Array Problems & Solutions

This file demonstrates various JavaScript array manipulation techniques. It covers common algorithmic challenges such as:

- Array Rotation (Right & Left)
- Merging Sorted Arrays
- Removing Duplicates
- Maximizing Stock Profit
- Sorting Arrays with Fixed Elements
- Finding Majority Element
- Maximum Subarray Sum
- Trapping Rain Water

---

## 1. 🌀 Array Rotation

### 🔁 Right Rotation

#### ✅ Brute Force Approach

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

#### ✅ Using Temporary Array

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
Output: [4, 5, 1, 2, 3]
```

#### ✅ Reversal Algorithm

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
Output: [4, 5, 1, 2, 3]
```

---

### 🔁 Left Rotation

#### ✅ Brute Force Approach

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
Output: [3, 4, 5, 1, 2]
```

#### ✅ Using Temporary Array

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
Output: [3, 4, 5, 1, 2]
```

#### ✅ Reversal Algorithm

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
Output: [1, 1, 2, 2, 3, 3, 4, 4, 5, 6]
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
Output: 5
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
Output: [0, 0, 1, 1, 2, 2, 2]
```

---

## 6. ✅ Majority Element (> n/2 Times)

Uses **Boyer-Moore Voting Algorithm**.

```js
let nums = [2, 2, 1, 1, 1, 2, 2];

let ans = nums[0];
let count = 1;

for (let i = 1; i < nums.length; i++) {
  if (count == 0) {
    ans = nums[i];
    count = 1;
  } else if (ans == nums[i]) {
    count++;
  } else {
    count--;
  }
}

console.log(ans);
```

```
Output: 2
```

---

## 7. 💰 Maximum Subarray Sum

Using **Kadane’s Algorithm**.

```js
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let sum = 0;
let max = -Infinity;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  max = Math.max(max, sum);
  if (sum < 0) sum = 0;
}

console.log(max);
```

```
Output: 6
```

➡️ Explanation: `[4, -1, 2, 1]` has the max sum of `6`.

---

## 8. 🌧️ Trapping Rain Water

```js
let height = [4, 2, 0, 3, 2, 5];

let left = new Array(height.length);
let right = new Array(height.length);

let maxLeft = height[0];
let maxRight = height[height.length - 1];

left[0] = maxLeft;
right[right.length - 1] = maxRight;

for (let i = 1; i < height.length; i++) {
  maxLeft = Math.max(height[i], maxLeft);
  left[i] = maxLeft;
}

for (let i = height.length - 2; i >= 0; i--) {
  maxRight = Math.max(height[i], maxRight);
  right[i] = maxRight;
}

let ans = 0;

for (let i = 0; i < height.length; i++) {
  ans += Math.min(left[i], right[i]) - height[i];
}

console.log(ans);
```

```
Output: 9
```

---
