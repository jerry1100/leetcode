/**
 * Time: O(n^2 * n!)
 * Space: O(n * n!)
 * n - # of nums
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const solutions = [];
  getPermutations(nums, solutions, []);
  return solutions;
}

/**
 * @param {number[]} nums
 * @param {number[][]} solutions
 * @param {number[]} current
 * @return {void}
 */
function getPermutations(nums, solutions, current) {
  if (current.length === nums.length) {
    return solutions.push(current.slice());
  }

  for (let i = 0; i < nums.length; i++) {
    if (current.includes(nums[i])) {
      continue;
    }

    current.push(nums[i]);
    getPermutations(nums, solutions, current);
    current.pop(nums[i]);
  }
}
