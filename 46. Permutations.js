/**
 * Time: O(n * n!)
 * Space: O(n * n!)
 * n - # of nums
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const solutions = [];
  findPermutations(nums, solutions, [], new Set());
  return solutions;
}

/**
 * @param {number[]} nums
 * @param {number[][]} solutions
 * @param {number[]} current
 * @param {Set} included
 * @return {void}
 */
function findPermutations(nums, solutions, current, included) {
  if (current.length === nums.length) {
    return solutions.push(current.slice());
  }

  for (let i = 0; i < nums.length; i++) {
    if (included.has(nums[i])) {
      continue;
    }

    current.push(nums[i]);
    included.add(nums[i]);
    findPermutations(nums, solutions, current, included);
    current.pop(nums[i]);
    included.delete(nums[i]);
  }
}
