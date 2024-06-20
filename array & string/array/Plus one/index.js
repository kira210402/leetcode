/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const number = digits.join('');
    const result = (BigInt(number) + 1n).toString().split("");
    return result.map(Number);
};
