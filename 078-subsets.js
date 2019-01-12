/**
 * Time: O(n * 2^n)
 * Space: O(n * 2^n)
 * n - # of nums
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const solutions = [];
  findSubsets(nums, solutions, [], 0);
  return solutions;
}


/**
 * @param {number[]} nums
 * @param {number[]} solutions
 * @param {number[]} current
 * @param {number} start
 */
function findSubsets(nums, solutions, current, start) {
  solutions.push(current.slice());

  for (let i = start; i < nums.length; i++) {
    current.push(nums[i]);
    findSubsets(nums, solutions, current, i + 1);
    current.pop();
  }
}
