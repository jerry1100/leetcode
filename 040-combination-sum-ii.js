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
  const solutions = [];

  candidates.sort((a, b) => a - b);
  findSets(candidates, solutions, [], target, 0);

  return solutions;
}

/**
 * @param {number[]} candidates
 * @param {number[][]} solutions
 * @param {number[]} current
 * @param {number} remainder
 * @param {number} start
 * @return {void}
 */
function findSets(candidates, solutions, current, remainder, start) {
  if (!remainder) {
    return solutions.push(current.slice());
  }

  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > remainder) { // remaining numbers are too big
      break;
    }

    if (i !== start && candidates[i] === candidates[i - 1]) { // prevent duplicate sets
      continue;
    }

    current.push(candidates[i]);
    findSets(candidates, solutions, current, remainder - candidates[i], i + 1);
    current.pop();
  }
}
