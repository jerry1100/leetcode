/*
  Solution:
    Go through nums and store the counts in a set. If we see a number that's
    already in the set, then we've seen it at least twice and we can return
    true. If we make it through the entire array, all the numbers are
    unique and we can return false.

  Analysis:
    Time: O(n) to loop through the array
    Space: O(n) to store the set
 */

    function solve(nums) {
      const set = new Set();

      for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
          return true;
        }

        set.add(nums[i]);
      }

      return false;
    }

    console.log(solve([1, 2, 3, 4, 5]));
    console.log(solve([1, 2, 3, 2, 5]));
    console.log(solve([]));
    console.log(solve([1]));

