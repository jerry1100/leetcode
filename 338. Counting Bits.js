/**
 * Time: O(n)
 * Space: O(n)
 * n - value of num
 */

/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
  const bits = [0];
  let nextPowerOf2 = 1;

  // Pattern: sol(i) = sol(i - lastPowerOf2) + 1
  for (let i = 1; i <= num; i++) {
    if (i === nextPowerOf2) {
      nextPowerOf2 *= 2;
    }
    bits[i] = bits[i - nextPowerOf2 / 2] + 1;
  }
  return bits;
}
