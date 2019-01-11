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
  const permutations = [];

  const getPermutations = set => {
    if (set.length === nums.length) {
      return permutations.push(set.slice()); // copy array by value
    }

    for (let i = 0; i < nums.length; i++) {
      if (set.includes(nums[i])) {
        continue;
      }

      set.push(nums[i]);
      getPermutations(set);
      set.pop(nums[i]);
    }
  };

  getPermutations([]);
  return permutations;
}
