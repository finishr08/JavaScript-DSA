// Initialize an array with unsorted numbers
let arr = [12, 1, 3, 2, 7, 4];

// Display the original unsorted array
console.log(`UnSorted Array: ${arr}`);

// Get the total number of elements in the array
let n = arr.length;

// Start of Insertion Sort algorithm
// Outer loop starts from index 1 because the first element is considered sorted
for (let i = 1; i < n; i++) {
  // Store the current element to be placed in the sorted portion
  let key = arr[i];

  // Initialize j to the element just before i
  let j = i - 1;

  // Move elements of the sorted part (arr[0] to arr[i-1])
  // that are greater than 'key' one position ahead
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j]; // Shift the larger element to the right
    j--; // Move to the previous element
  }

  // Place the 'key' in its correct sorted position
  arr[j + 1] = key;
}

// Display the sorted array after all passes
console.log(`Sorted Array: ${arr}`);
