/*
  Naive:
    Get the product of all the elements in the array, and just divide by
    the element at i to get the product of everything except self.

  Note: this is NOT an acceptable solution since it will break when nums
  contains a 0. It may be possible to detect the 0 and handle it differently
  but let's use a different approach.
 */

function productExceptSelf(nums) {
  const totalProduct = nums.reduce((total, num) => total * num, 1);

  return nums.map(num => totalProduct / num);
}

/*
  Optimal:
    Instead of using divison and getting into trouble with 0s, we can
    instead recognize that answer[i] is made up of the products to the
    right of i multiplied by the products to the left of i. We can do some
    preprocessing to calculate the rProducts[] and lProducts[] and then
    use those to get the answer.

  Algorithm:
    calculate rProducts:
      rProducts = new Array(n);
      rProducts[n-1] = 1;
      for i = n-2; i >= 0; i--)
        rProducts[i] = nums[i+1] * rProducts[i+1];

    calculate lProducts:
      lProducts = new Array(n);
      rProducts[0] = 1;
      for i = 1 i < n; i++)
        lProducts[i] = nums[i-1] * lProducts[i-1];

    create answer:
      ans = [];
      for i = 0; i < n; i++)
        ans[i] = rProducts[i] * lProducts[i];

    Analysis:
      Time: O(n)
      Space: O(n)
 */
function productExceptSelf2(nums) {
  // Calculate rProducts:
  const rProducts = new Array(nums.length);
  rProducts[nums.length - 1] = 1; // nothing right of last element
  for (let i = nums.length - 2; i >= 0; i--) {
    rProducts[i] = nums[i + 1] * rProducts[i + 1];
  }

  // Calculate lProducts:
  const lProducts = new Array(nums.length);
  lProducts[0] = 1; // nothing left of first element
  for (let i = 1; i < nums.length; i++) {
    lProducts[i] = nums[i - 1] * lProducts[i - 1];
  }

  // Get answer
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = rProducts[i] * lProducts[i];
  }

  return ans;
}

/*
  Optimal 2:
    A slightly more optimized approach would be to not create the left
    products array, since we can accumulate the products as we go, storing
    it into a single variable. This means one less iteration through n and
    one less array.
 */
function productExceptSelf3(nums) {
  // Calculate rProducts:
  const rProducts = new Array(nums.length);
  rProducts[nums.length - 1] = 1; // nothing right of last element
  for (let i = nums.length - 2; i >= 0; i--) {
    rProducts[i] = nums[i + 1] * rProducts[i + 1];
  }

  // Calculate ans while keeping track of lProducts
  const ans = [];
  let lProducts = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = lProducts * rProducts[i];
    lProducts *= nums[i];
  }

  return ans;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([0, 2, 3, 4])); // [24, 12, 8, 6]

console.log(productExceptSelf2([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf2([0, 2, 3, 4])); // [24, 12, 8, 6]

console.log(productExceptSelf3([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf3([0, 2, 3, 4])); // [24, 12, 8, 6]
