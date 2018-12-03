/**
 * Time: O(log n)
 * Space: O(1)
 * n - # of elements in nums
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // While there are elements to search
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  // Target is not in nums, with one num left: 
  //   if target < num, then pos = left = right + 1
  //   if target > num, then pos = right + 1
  return right + 1;
};
