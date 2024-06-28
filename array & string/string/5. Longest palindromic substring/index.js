/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left > result.length) {
      result = s.slice(left + 1, right);
    }
  }
  return result;
}


console.log('longestPalindrome: ', longestPalindrome('xkarqzghhgfedcbabcdefgzdekx'))