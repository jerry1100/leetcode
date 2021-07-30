// N: number of nodes
// Time: O(N)
// Space: O(N)

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function goodNodes(root: TreeNode | null): number {
    return dfs(root, -Infinity);
}

function dfs(node: TreeNode | null, maxVal: number): number {
    if (!node) {
        return 0;
    }

    const goodNodeVal = node.val >= maxVal ? 1 : 0;
    const newMax = Math.max(maxVal, node.val);
    const goodChildNodes = dfs(node.left, newMax) + dfs(node.right, newMax);

    return goodNodeVal + goodChildNodes;
}
