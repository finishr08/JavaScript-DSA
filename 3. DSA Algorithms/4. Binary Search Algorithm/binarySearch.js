let arr = [1, 2, 3, 4, 5, 6, 7, 22, 23, 45, 67, 88];

let index = binarySearch(arr, 0, arr.length - 1, 45);

console.log(index == -1 ? "Not Found" : `Found ${index} index`);

function binarySearch(arr, ft, lt, target) {
  while (ft <= lt) {
    let mid = Math.floor((ft + lt) / 2);
    if (arr[mid] == target) return mid;
    else arr[mid] > target ? (lt = mid - 1) : (ft = mid + 1);
  }
  return -1;
}
