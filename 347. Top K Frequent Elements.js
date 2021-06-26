/*
  Naive solution:
    1. Create a map of each numbers counts
    2. Sort the map by counts
    3. Return top k counts

  Time complexity:
    Create map of counts: O(n)
    Sorting the counts: O(nlog(n))
    Total: O(nlog(n))

  Space complexity:
    Storing the map of counts: O(n)
 */

    function topKFrequent(nums, k) {
      const map = {};

      nums.forEach(num => {
        map[num] = (map[num] ?? 0) + 1;
      });

      const numsWithCounts = [];
      Object.entries(map).forEach(([num, countOfNum]) => {
        numsWithCounts.push({ num, countOfNum });
      });

      numsWithCounts.sort((kvp1, kvp2) => kvp2.countOfNum - kvp1.countOfNum);

      return numsWithCounts.slice(0, k).map(kvp => kvp.num);
    }

    /*
      Optimal solution:
        There are several details that can make our algorithm faster:
          1. The order of the result doesn't matter, so sorting is overkill
          2. It's guaranteed that the answer is unique

      I spent a lot of time trying to come up with the answer on my own, but
      gave up. I was kind of on the right track - I thought to use a priority
      queue but struggled with the implementation. What I really wanted is a
      max heap. Unfortunately, I also struggled with the implementation of
      max_heapify(), but I know that it can be created in O(n) time.

      One leetcode comment actually suggested bucket sort, taking advantage of
      the fact that a number's count will be at most n. Using this, instead of
      sorting the counts, we can just check every possible count, from big to
      small, and return the first k counts.

      Time complexity:
        Build map of numbers => counts: O(n)
        Build map of counts => numbers: O(n)
        Build toReturn: O(n)
        Total: O(n)

      Space complexity:
        Each map uses O(n), so total is O(n)
     */

    function topKFrequent2(nums, k) {
      const map = {};

      nums.forEach(num => {
        map[num] = (map[num] ?? 0) + 1;
      });

      const counts = {};
      Object.entries(map).forEach(([num, countOfNum]) => {
        if (!counts[countOfNum]) {
          counts[countOfNum] = [];
        }
        counts[countOfNum].push(num);
      });

      const toReturn = [];
      for (let freq = nums.length; freq > 0; freq--) {
        if (!counts[freq]) {
          continue;
        }

        toReturn.push(...counts[freq]);

        if (toReturn.length === k) {
          return toReturn;
        }
      }
    }

    console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
    console.log(topKFrequent([1], 1));

    console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2));
    console.log(topKFrequent2([1], 1));
