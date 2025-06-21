// Initialize an array with unsorted numbers
let arr = [12, 1, 3, 2, 7, 4];

// Display the original unsorted array
console.log(`UnSorted Array: ${arr}`);

// Get the total number of elements in the array
let n = arr.length;

// Start of Bubble Sort algorithm
// Outer loop - controls how many passes we make through the array

for (let i = 0; i < n - 1; i++) {
  // Inner loop - goes through the unsorted part of the array
  // After each outer loop, the largest element "bubbles up" to its correct position

  for (let j = 0; j < n - 1 - i; j++) {
    // Compare adjacent elements

    if (arr[j] > arr[j + 1]) {
      // If the left element is greater than the right, swap them
      // This brings the larger element closer to the end of the array

      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// Display the sorted array after all passes
console.log(`Sorted Array: ${arr}`);

/**
 
Bubble Sort is a simple sorting algorithm that repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order.

The largest values "bubble up" to the end with each pass.

It has a time complexity of O(n²) for average and worst cases.

 */
