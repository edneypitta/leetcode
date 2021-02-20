/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const left = [1],
    right = [...nums.slice(0, nums.length - 1), 1];

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  return nums.map((_, index) => left[index] * right[index]);
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelfRec(nums) {
  const left = nums.map((_, index) => productFromLeftRec(nums, index));
  const right = nums.map((_, index) => productFromRightRec(nums, index));

  return nums.map((_, index) => left[index] * right[index]);
}

function productFromLeftRec(array, index, result = 1) {
  return index === 0
    ? result
    : productFromLeftRec(array, index - 1, result * array[index - 1]);
}

function productFromRightRec(array, index, result = 1) {
  return index === array.length - 1
    ? result
    : productFromRightRec(array, index + 1, result * array[index + 1]);
}
