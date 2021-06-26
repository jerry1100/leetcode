// H: height of tree
// Time: O(H), which is O(log N) for a balanced BST
// Space: O(1)

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

function closestValue(root: TreeNode | null, target: number): number {
    let node = root;
    let closest = Infinity;
    let closestDiff = Infinity;

    while (node) {
        const diff = Math.abs(target - node.val);

        if (diff < closestDiff) {
            closestDiff = diff;
            closest = node.val;
        }

        if (node.val > target) { // overshot, go left
            node = node.left;
        } else if (node.val < target) { // undershot, go right
            node = node.right;
        } else { // they're equal
            break;
        }
    }
    
    return closest;
};