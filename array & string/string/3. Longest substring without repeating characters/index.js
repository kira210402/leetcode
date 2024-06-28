/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let current = 0;
  let map = new Map();
  for(let i = 0; i < s.length; i ++) {
    if(map.has(s[i])) {
      current = Math.max(map.get(s[i]) + 1, current);
    }
    map.set(s[i], i);
    longest = Math.max(longest, i - current + 1);
  }
  return longest;
};
