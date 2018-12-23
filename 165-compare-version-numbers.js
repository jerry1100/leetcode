/**
 * Time: O(max(n, m))
 * Space: O(max(n, m))
 * n - length of version1
 * m - length of version2
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const length = Math.max(arr1.length, arr2.length);

  // Compare each version or subversion
  for (let i = 0; i < length; i++) {
    const num1 = Number(arr1[i]) || 0;
    const num2 = Number(arr2[i]) || 0;

    if (num1 !== num2) {
      return Math.sign(num1 - num2);
    }
  }

  return 0;
}
