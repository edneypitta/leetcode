/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(nums.map((value, index) => [value, index]));

  for (let i in nums) {
    const complement = map.get(target - nums[i]);
    if (complement && complement != i) {
      return [i, complement];
    }
  }
};
