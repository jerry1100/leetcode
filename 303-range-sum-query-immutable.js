/*
  Naive solution:
    Count elements from left to right.

  Time complexity:
    Counting each element: O(n)

  Space complexity:
    No space necessary: O(1)
 */

    class NumArray {
      constructor(nums) {
        this.nums = nums;
        this.savedSums = this.preCalc2();
      }

      sumRange(left, right) {
        let sum = 0;

        for (let i = left; i <= right; i++) {
          sum += this.nums[i];
        }

        return sum;
      }
    }

    /*
      Optimal solution:
        Precalculate all the possible solutions beforehand, so each calculation will just
        be a lookup.

        To store the sums, we can use an object where the keys are the start and end indices
        separated by a comma.

      Time complexity:
        preCalc: n^2 possible combinations calculated, O(n^2)
        sumRange2: dictionary lookup, O(1)

      Space complexity:
        Storing n^2 sums, so O(n^2)
        Note: using an object instead of a 2D array to store our sums is more space efficient
        (ignoring the space of the keys), since about half of the 2D array will be empty
        since the sum is not defined when start > end.
     */

    NumArray.prototype.preCalc = function() {
      const savedSums = {};

      for (let start = 0; start < this.nums.length; start++) {
        let sum = 0;

        for (let current = start; current < this.nums.length; current++) {
          sum += this.nums[current];
          savedSums[`${start},${current}`] = sum;
        }
      }

      return savedSums;
    }

    NumArray.prototype.sumRange2 = function(left, right) {
      return this.savedSums[`${left},${right}`];
    }

    /*
      Optimal solution 2:
        Observe that sumRange(x, y) = sumRange(0, y) - sunRange(0, x). Therefore, instead of
        calculating savedSums for every single combination, resulting in quadratic time and
        space, we can just do it from 0 to n-1, giving us linear space and time. This is
        called a cumulative sum array.

        We'll use an array this time for ease of access. An object would work as well.

      Time complexity:
        preCalc2: build cumulative sum array, O(n)
        sumRange3: O(1)

      Space complexity:
        savedSums[]: O(n)

        Note: if we were allowed to modify the input nums, we could write the cumulative sum
        array in its place, improving our space complexity to O(1).
     */
    NumArray.prototype.preCalc2 = function() {
      const savedSums = [];
      let sum = 0;

      for (let i = 0; i < this.nums.length; i++) {
        sum += this.nums[i];
        savedSums[i] = sum;
      }

      return savedSums;
    }

    NumArray.prototype.sumRange3 = function(left, right) {
      if (left === 0) {
        return this.savedSums[right];
      }

      return this.savedSums[right] - this.savedSums[left - 1];
    }

    // Test
    const nums = new NumArray([-2, 0, 3, -5, 2, -1]);
    console.log(nums.sumRange(0, 2));
    console.log(nums.sumRange(2, 5));
    console.log(nums.sumRange(0, 5));
    console.log(nums.sumRange3(0, 2));
    console.log(nums.sumRange3(2, 5));
    console.log(nums.sumRange3(0, 5));
