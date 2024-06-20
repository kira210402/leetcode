/**
 * @param {number[]} nums
 * @return {number}
 */
// #1: O(n^2)
// var pivotIndex = function(nums) {
//   for(let i = 0; i < nums.length; i ++) {
//       let right = 0, left = 0
//       for(let j = 0; j < i; j++) {
//           left += nums[j]
//       }
      
//       for(let k = i + 1; k > i && k < nums.length; k ++) {
//           right += nums[k]
//       }
      
//       if(left === right) {
//           return i
//       } 
//   }
//   return -1
// };

// #2: O(n)
var pivotIndex = function(nums) {
  let totalSum = 0, leftSum = 0

  nums.forEach(num => totalSum += num)

  for(let i = 0; i < nums.length; i ++) {
    if(totalSum - leftSum - nums[i] === leftSum) {
      return i 
    }
    leftSum += nums[i]
  }

  return -1
}

console.log("should return 0", pivotIndex([1, -1, 1, -1, 1]))