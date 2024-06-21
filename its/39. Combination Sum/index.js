/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {


//     const result = [];
//     const dfs = (target, start, path) => {
//         if (target < 0) return;
//         if (target === 0) {
//             result.push(path);
//             return;
//         }
//         for (let i = start; i < candidates.length; i++) {
//             dfs(target - candidates[i], i, [...path, candidates[i]]);
//         }
//     };
//     dfs(target, 0, []);
//     return result;
// };

var combinationSum = function (candidates, target) {
  let result = []
  let current = []

  const recursive = (i, sum) => {
    if (target === sum) result = [...result, current.slice()]
    else if (target > sum) {
      for (let j = i; j < candidates.length; j++) {
        current.push(candidates[j])
        recursive(j, sum + candidates[j])
        current.pop(candidates[j])
      }
    }
    return result;
  }
  return recursive(0, 0)
}
