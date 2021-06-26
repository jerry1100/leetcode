// N: number of nodes in the tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;
    
    const getHeight = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }
        
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        
        // leftHeight + rightHeight means we're going through current node
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        // Height is max of child nodes + 1 for current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Visit each node and update diameter
    getHeight(root);
    
    return diameter;
};