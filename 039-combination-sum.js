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
  const solutions = [];
  findSets(candidates, solutions, [], target, 0);
  return solutions;
}

/**
 * 
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

  if (remainder < 0) {
    return;
  }

  // Track start to prevent going backwards, avoiding duplicates
  for (let i = start; i < candidates.length; i++) {
    current.push(candidates[i]);
    findSets(candidates, solutions, current, remainder - candidates[i], i);
    current.pop();
  }
}
