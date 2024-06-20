/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for(let i = 0; i < nums.length; i ++) {
      let right = 0, left = 0
      for(let j = 0; j < i; j++) {
          left += nums[j]
      }
      
      for(let k = i + 1; k > i && k < nums.length; k ++) {
          right += nums[k]
      }
      
      if(left === right) {
          return i
      } 
  }
  return -1
};