/**
 * Time: O(n)
 * Space: O(1)
 * n - number of points
 */

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > maxArea) {
      maxArea = area;
    }

    // Move the shorter line, this is the only way to increase the area
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxArea;
};
