/**
 * Time: O(n)
 * Space: O(n)
 * n - # of nums
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  return addNode(nums, 0, nums.length - 1);
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {TreeNode}
 */
function addNode(nums, start, end) {
  if (end < start) {
    return null;
  }

  // Use the middle element so the left and right halves will be about the same size
  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(nums[mid]);

  // Fill in the left and right subtrees
  node.left = addNode(nums, start, mid - 1);
  node.right = addNode(nums, mid + 1, end);

  return node;
}
