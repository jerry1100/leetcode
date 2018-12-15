/**
 * Time: O(2^n)
 * Space: O(2^n)
 * n - # of candidates
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const validSets = [];
  candidates.sort((a, b) => a - b); // make numbers that have the same value neighbors

  const findSets = (testSet, remainder, start) => {
    if (!remainder) {
      return validSets.push(testSet.slice()); // copy array by value
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remainder) { // remaining numbers are too big
        break;
      }

      if (i !== start && candidates[i] === candidates[i - 1]) { // prevent duplicate sets
        continue;
      }

      testSet.push(candidates[i]);
      findSets(testSet, remainder - candidates[i], i + 1);
      testSet.pop();
    }
  };

  findSets([], target, 0);
  return validSets;
};
