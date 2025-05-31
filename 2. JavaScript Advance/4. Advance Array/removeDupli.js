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
