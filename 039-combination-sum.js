/**
 * Time: O(m^2 * 2^n)
 * Space: O(m * 2^n)
 * n - # of candidates
 * m - target
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const validSets = [];

  const findSets = (testSet, remainder, start) => {
    if (!remainder) {
      return validSets.push(testSet.slice()); // copy array by value
    }

    if (remainder < 0) {
      return;
    }

    // Track start to prevent going backwards, avoiding duplicates
    for (let i = start; i < candidates.length; i++) {
      testSet.push(candidates[i]);
      findSets(testSet, remainder - candidates[i], i);
      testSet.pop();
    }
  };

  findSets([], target, 0);
  return validSets;
}
