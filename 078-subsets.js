/**
 * Time: O(2^n)
 * Space: O(2^n)
 * n - # of nums
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const powerSet = [];

  const getSubset = (set, start) => {
    powerSet.push(set.slice()); // copy by value

    for (let i = start; i < nums.length; i++) {
      set.push(nums[i]);
      getSubset(set, i + 1);
      set.pop();
    }
  };

  getSubset([], 0);
  return powerSet;
}
