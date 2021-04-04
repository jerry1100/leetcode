/*
  Solution:
    We need to find the maximum sum of a subarray within the given array.
    The crux of the problem is that we need to determine where our subarray
    begins, so we can start counting, while storing the maximum sum so far.

    One insight is that if we're processing nums[i] and the sum so far is
    negative, we can reset the sum to 0 as if we're not including the
    previous elements.

  Analysis:
    Time: O(n)
    Space: O(1)
 */
function maxSubArray(nums) {
  let maxSoFar = -Infinity;
  let subArraySum = 0;

  nums.forEach(num => {
    subArraySum = Math.max(subArraySum, 0);
    subArraySum += num;
    maxSoFar = Math.max(subArraySum, maxSoFar);
  });

  return maxSoFar;
}
