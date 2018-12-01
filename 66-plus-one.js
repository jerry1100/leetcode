/**
 * Time: O(n)
 * Space: O(1)
 * n - # of elements in digits
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let carry = 1;

  // Process digits from right to left
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    carry = sum > 9 ? 1 : 0;
    digits[i] = sum % 10;
  }

  if (carry) {
    digits.unshift(1);
  }

  return digits;
};
