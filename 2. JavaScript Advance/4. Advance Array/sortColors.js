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
    // nums[j] === 2
    [nums[j], nums[k]] = [nums[k], nums[j]];
    k--;
  }
}

console.log(nums);
