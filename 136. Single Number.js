/**
 * Time: O(n)
 * Space: O(1)
 * n - # of elements in nums
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return nums.reduce((total, current) => total^current);
}
