// N: number of nodes in tree
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

function inorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [];
    const res: number[] = [];
    let node = root;

    while (node || stack.length) {
        // Process left: equivalent to dfs(node.left)
        while (node) {
            stack.push(node);
            node = node.left;
        }

        // Process current: equivalent to just after returning from dfs(node.left)
        node = stack.pop();
        res.push(node.val);

        // Process right
        node = node.right;
    }

    return res;
}
