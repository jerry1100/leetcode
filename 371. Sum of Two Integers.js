/**
 * Time: O(sizeof(number))
 * Space: O(1)
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
  const sum = a ^ b; // XOR derives the sum bits, without carry
  const carry = (a & b) << 1; // AND derives the carry bits

  if (!carry) {
    return sum;
  }

  return getSum(sum, carry);
}
