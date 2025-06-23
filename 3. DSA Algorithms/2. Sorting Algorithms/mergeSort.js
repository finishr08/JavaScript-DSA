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
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 8, 11, 12]
