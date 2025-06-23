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
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 8, 11, 12]
