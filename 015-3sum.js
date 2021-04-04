/*
  Naive:
    Try every possibility. Have three loops, one for i, j, and k, and check
    if the values sum up to 0. If they do, save the nums.

    Note: can start j at i+1 and k at j+1 since order doesn't matter. We
    also assume null will not be passed in.

    Actually, this solution will not work because it doesn't get rid of
    duplicate triplets.
 */
    function threeSum(nums) {
      const ans = [];

      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
            if (nums[i] + nums[j] + nums[k] === 0) {
              ans.push([nums[i], nums[j], nums[k]]);
            }
          }
        }
      }

      return ans;
    }

    /*
      Example: [1, 0, -1, 1]
                ^  ^
      Need to find two other elements whose sum is the complement of the
      current element.

      We can start with the very next element and try to find a complement for
      the sum of the two elements picked so far. E.g. we picked 1 and the next
      one is 0, we will try and find the complement of 1 + 0 = 1, so -1. We
      can do this by first reading all the elements into a hash table, so we
      can check if the complement exists or not.

      This will be a O(n^2) approach with O(n) space. If we wanted to use less
      space, we can sort the array then use binary search instead of a hash
      table, which will be O(log(n)) space for the sorting.

      But how do we prevent duplicate triplets? In the above example, our
      algorithm would produce [1, 0, -1] and [0, -1, 1], which are duplicates
      of each other.

      There might be a better way but for now I will just create some hashing
      algorithm so duplicate triplets will result in the same hash. I'll keep
      a set of all the hashes and before adding my solution to the result,
      I'll check the set to make sure it's not already added. The hashing
      should be constant time and the set will take up O(n) space.

      Algorithm:
      1. create array to store results, set to keep track of added results
      2. read all elements into a dictionary for complement lookups
      3. for i in 0...n-1
           for j in i+1...n-1
      4. sum up nums at i, j and look for a complement
      5. if complement exists, hash it and add to results if not already

      There's one more issue: when finding the complement, how do we ensure
      that we're not reusing a number that's already been used in our sum?
      When reading the nums in the dictionary, we can keep track of how many
      times they appear. We subtract 1 from the available count for every num
      we use in the sum equal to that.

      TODO:
        [x] figure out a way to dedupe triplets

      Analysis:
        Time: O(n^2) for nested loops
        Space: O(n) to store numCounts
     */
    function threeSum2(nums) {
      const ans = [];
      const seen = new Set();
      const numCounts = {};

      // Count each number, used to quickly find complements
      nums.forEach(num => {
        numCounts[num] = (numCounts[num] ?? 0) + 1;
      });

      for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
          const num2 = nums[j];
          const complement = -(num1 + num2);

          // Subtract numbers we're already using from availabe
          const numComplement = (numCounts[complement] ?? 0)
            - (num1 === complement ? 1 : 0)
            - (num2 === complement ? 1 : 0);

          if (numComplement < 1) {
            continue;
          }

          const result = [num1, num2, complement];
          const resultHash = getHash(result);
          if (!seen.has(resultHash)) {
            ans.push(result);
            seen.add(resultHash);
          }
        }
      }

      return ans;
    }

    function getHash(nums) {
      return nums.sort().toString();
    }

    /*
      The above algorithm is correct but the result is slow. At this point
      I gave up and looked at the solution, which was to first sort the
      array, then use a two pointer approach to find the target.

      Algorithm:
        1. Iterate through each nums
        2. Create pointers `high` and `low` initialized at i+1 and n-1
        3. Walk towards the target, which is the complement of the number
           at i, skipping any dupliates
        4. If a valid solution exists, add it to the results

      Optimizations:
        1. If i is positive, we can return results since there won't be
           a negative result to the right of it
        2. If nums < 3, return an empty array since we need at least 3
        3. If nums[i] is the same as the previous value, then skip it to
           prevent duplicates.

      Analysis:
        Time: O(n^2) to "walk" for each element
        Space: O(log(n)) for sorting
     */
    function threeSum3(nums) {
      const ans = [];

      if (nums.length < 3) {
        return ans;
      }

      nums.sort((a, b) => a - b);

      for (let i = 0; i < nums.length; i++) {
        // If > 0, then nothing to the right will sum to 0
        if (nums[i] > 0) {
          return ans;
        }

        // Skip duplicates
        if (nums[i] === nums[i - 1]) {
          continue;
        }

        let lowPtr = i + 1;
        let highPtr = nums.length - 1;

        // Walk towards middle
        while (lowPtr < highPtr) {
          const sum = nums[lowPtr] + nums[highPtr] + nums[i];

          if (sum === 0) {
            ans.push([nums[lowPtr], nums[highPtr], nums[i]]);
          }

          if (sum <= 0) {
            while (nums[lowPtr] === nums[lowPtr + 1]) lowPtr++;
            lowPtr++;
          }

          if (sum >= 0) {
            while (nums[highPtr] === nums[highPtr - 1]) highPtr--;
            highPtr--;
          }
        }
      }

      return ans;
    }

    console.log(threeSum3([1, -1, 0, 2, -2, 1]));
    console.log(threeSum3([1, 0, -1, 1]));
    console.log(threeSum3([0, 0, 0, 0]));

