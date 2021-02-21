/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const [first, ...rest] = nums;
  return rest.reduce(
    (acc, curr) => {
      const maxEndingHere = Math.max(curr, acc.maxEndingHere + curr);
      return {
        maxEndingHere,
        maxGlobal: Math.max(acc.maxGlobal, maxEndingHere),
      };
    },
    { maxEndingHere: first, maxGlobal: first }
  ).maxGlobal;
};

var maxSubArrayImp = function (nums) {
  let maxEndingHere = nums[0],
    maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxGlobal = Math.max(maxGlobal, maxEndingHere);
  }

  return maxGlobal;
};
