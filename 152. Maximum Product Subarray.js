/*
  Given an array, find the largest product that can be produced by a contiguous subarray within that
  array.

  Example: [ -1, 2, 4, 1 0 ]
                 ^  ^  ^

  The answer above would be 8 (2*4*1).

  Example with negative numbers: [ -2, 4, 3, -1 ]

  Questions:
    1) will the array be guaranteed to have at least one element? Yes
    2) will the resulting product fit within a standard integer? I.e. no overflow? Yes

  The crux of the problem is determining where our subarray begins, and if we should include
  negative numbers in our subarray, in hopes that we will see another negative number in the future
  that will turn it positive.

  Let's say we're processing another number. Several things can happen:
    1) it's 0. This essentially kills our product, so we can treat this as a reset and reset our
       current product to 1.
    2) it's negative. This increases the absolute value of our product, but it could also result in
       a very small number if we don't encounter another negative number. Thus, we should keep
       separate products: positive, which only includes positive numbers and treats negative ones
       as a reset, or absolute, which includes both positive and negative numbers
    3) it's positive. This is a win in both cases.

  Note:
    we shouldn't update maxSoFar if all we did was a reset, since we're resetting to 1, and that
    will be larger than negative numbers.

  Algorithm:
    maxSoFar = -Infinity
    posProduct = 1
    absProduct = 1
    for num in nums
      shouldResetPosProduct = num == 0 || num < 0
      shouldResetAbsProduct = num == 0

      if shouldResetPosProduct
        posProduct = 1
      else
        posProduct *= num
        maxSoFar = max(maxSoFar, posProduct)

      if shouldResetAbsProduct
        absProduct = 1
      else
        absProduct *= num
        maxSoFar = max(maxSoFar, absProduct)

    return maxSoFar

  Analysis:
    Time: O(n)
    Space: O(1)

  The below algorithm doesn't work if we have only negative numbers and 0. It fails to update the
  max to 0 because we are only resetting it. We can "fix" this by explicitly checking for 0 and
  updating maxSoFar to the max(maxSoFar, 0)

  posProduct *= num
  absProduct *= num

  maxSoFar = max(maxSoFar, posProduct, absProduct)

  if posProduct < 1
    posProduct = 1
  if absProduct == 0
    absProduct = 1

  This approach is wrong and doesn't work. I looked at the solution and it said to keep track
  of maxSoFar and minSoFar instead of posProduct and absProduct. The reasoning was hard to
  understand but drawing it out helps.

  For example: [2, -5, -2, -4, 3]

  We start with 2. When processing the next element (-5), we can either multiply that with 2 to
  get -10, or start a new subarray with -5. Then we process the next element (-2), and we can
  either get 20 (2(-5)(-2)), 10 ((-5)(-2)), or just -2 if we start a new subarray. The key insight
  is that we don't need to develop the 10 branch anymore, since anything we multiply to 10 we could
  also multiply to 20, which is bigger. This is what prevents the solution from getting too big.

        *-5    *-2    *-4      *3

 (2)---(-10)---(20)---(-80)---(-240)

        (-5)---(10)/

               (-2)----(8)----(24)
                      (-4)/

  Another way you can think about it is that we're trying to keep the biggest absolute numbers
  possible. So in each round, we want to keep track of the biggest positive number and the biggest
  negative number.

  New algorithm:
    ans = nums[1]
    maxSoFar = nums[1]
    minSoFar = nums[1]

    for i = 1; i < nums.length; i++
      const maxTimesNum = maxSoFar * nums[i]
      const minTimesNum = minSoFar * nums[i]

      maxSoFar = max(nums, maxTimesNum, minTimesNum)
      minSoFar = min(nums, maxTimesNum, minTimesNum)

      ans = max(ans, maxSoFar)

    return ans

  When reading the comments, someone mentioned they came to the key insight (you only need to keep
  track of largest positive and negative numbers) by writing down all the combinations and realizing
  that only the branches stemming from the largest positive and negative numbers mattered in the
  end. This is a technique mentioned in Cracking The Coding Interview, so I should practice doing
  it.
 */
function maxProduct(nums) {
  let ans = nums[0];
  let maxSoFar = nums[0];
  let minSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const maxTimesNum = maxSoFar * nums[i];
    const minTimesNum = minSoFar * nums[i];

    maxSoFar = Math.max(nums[i], maxTimesNum, minTimesNum);
    minSoFar = Math.min(nums[i], maxTimesNum, minTimesNum);

    ans = Math.max(ans, maxSoFar);
  }

  return ans;
}

console.log(maxProduct([-1, 0, -2, 3, -1])); // 6
console.log(maxProduct([-1, 2, 4, 1, 0])); // 8
console.log(maxProduct([-2, 0, -1])); // 0
