/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (node, sum) => {
        if (!node) return false;
        if (!node.left && !node.right) {
            return sum + node.value === targetSum;
        }
        return dfs(node.left, sum + node.value) || dfs(node.right, sum + node.value);
    };
    return dfs(root, 0);
};
