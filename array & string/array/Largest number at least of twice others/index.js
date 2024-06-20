/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max_index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[max_index] < nums[i]) max_index = i
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== max_index && nums[max_index] < nums[i] * 2) {
      return -1
    }
  }
  return max_index
};

