// Initialize an array with unsorted numbers
let arr = [12, 1, 3, 2, 7, 4];

// Display the original unsorted array
console.log(`UnSorted Array: ${arr}`);

// Get the total number of elements in the array
let n = arr.length;

// Start of Selection Sort algorithm
// Outer loop - controls the current index to place the smallest element
for (let i = 0; i < n - 1; i++) {
  // Assume the current index has the minimum value
  let minIdx = i;

  // Inner loop - find the actual minimum element in the remaining unsorted array
  for (let j = i + 1; j < n; j++) {
    // If a smaller element is found, update minIdx
    if (arr[minIdx] > arr[j]) {
      minIdx = j;
    }
  }

  // If a smaller element was found (minIdx changed), swap it with the current element at index i
  if (minIdx != i) {
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
}

// Display the sorted array after all passes
console.log(`Sorted Array: ${arr}`);
