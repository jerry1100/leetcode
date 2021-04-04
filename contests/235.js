/**
 * Analysis:
 *  Time: O(n)
 *  Space: O(n)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  return s.split(' ').slice(0, k).join(' ');
};

// console.log(truncateSentence("Hello how are you Contestant", 4));
// console.log(truncateSentence("What is the solution to this problem", 4));

/**
 * answer[j] is number of users whose unique active minutes (UAM) is j
 * [0, 5] => user 0 performed action at time 5
 *
 * UAM is defined as the number of unique minutes that user did something.
 *
 * So we need to get:
 *  1) user => UAM
 *    a) get set of users
 *    b) for each user, get set of minutes
 *    c) UAM will be size of set
 *  2) given some UAM => # users with that UAM
 *    a) for each UAM, go through users structure and count users with that UAM
 *
 *  For 1) we can use an object where key is the user id and the value is a set
 *  of minutes. We go through the logs and add each user to our object. If they
 *  already exist, we add the time to the set.
 *
 *  Then, we can create another dictionary that's just user => UAM by getting the
 *  size of the set.
 *
 *  For 2) we can iterate through the object values (UAM) and increment ans[UAM]
 *  every time we hit that value.
 *
 * Analysis:
 *  Time: O(n) where n is log size
 *  Space: O(n)
 */

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
  // user => times
  const userTimes = {};
  logs.forEach(([user, time]) => {
    if (!userTimes[user]) {
      userTimes[user] = new Set();
    }

    userTimes[user].add(time);
  });

  // user => UAM
  const userUAM = {};
  Object.entries(userTimes).forEach(([user, times]) => {
    userUAM[user] = times.size;
  });

  // answer
  const ans = new Array(k).fill(0);
  Object.values(userUAM).forEach(uam => {
    const index = uam - 1; // 1-indexed array so when they call ans[1] they want to access ans[0]
    ans[index] += 1;
  });

  return ans;
};

// console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5));
// console.log(findingUsersActiveMinutes([[1,1],[2,2],[2,3]], 4));

/**
 * We can replace at most one element in nums1 to minimize the absolute difference.
 * Return answer mod 10^9 + 7
 *
 * nums1: [1, 7, 5]
 * nums2: [2, 3, 5]
 * diff:  [1, 4, 0]
 *
 * There are two decisions we need to make:
 *  1) which index do we want to replace (if any)
 *  2) which index do we want to replace the index from 1) with?
 *
 * We can't simply go for the index with the maximum diff, as this example illustrates:
 * nums1: [1, 2, 3, 10000, 99]
 * nums2: [0, 0, 0, 10100,  0]
 * diff:  [1, 2, 3,   100, 99]
 *
 * For a brute-force approach, we can try everything. For each nums1, replace it with every
 * other nums1 and calculate the difference. If it's smaller than our previous, then keep it,
 * else move on. This is O(n^2).
 *
 * For a smarter approach, let's try sort both nums1 and nums2, then create a mapping from nums2
 * to the closet nums1. Then we can find maxSavings in linear time by going through nums2, getting
 * the current diff, then comparing that with the new diff using the map.
 *
 * Analysis:
 *  Time: O(nlog(n))
 *  Space: O(n)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
  // Get initial absolute sum
  let absSum = 0;
  for (let i = 0; i < nums1.length; i++) {
    absSum += Math.abs(nums1[i] - nums2[i]);
  }

  // For each element in nums2, get the value in nums1 closest to it
  const sorted1 = [...nums1].sort((a, b) => a - b);
  const sorted2 = [...nums2].sort((a, b) => a - b);
  const closestNums1 = {};
  let i1 = 0;

  for (let i2 = 0; i2 < sorted2.length; i2++) {
    let diff = Math.abs(sorted2[i2] - sorted1[i1]);

    while (true) {
      let t1 = i1 + 1; // look one ahead
      const newDiff = Math.abs(sorted2[i2] - sorted1[t1]);

      if (newDiff <= diff) {
        diff = newDiff;
        i1 += 1;
      } else {
        break;
      }
    }

    closestNums1[sorted2[i2]] = sorted1[i1];
  }

  // Test getting maximum savings by replacing every nums1 with its closest nums2
  let maxSavings = 0;
  for (let i = 0; i < nums1.length; i++) {
    const currentDiff = Math.abs(nums1[i] - nums2[i]);
    const newDiff = Math.abs(closestNums1[nums2[i]] - nums2[i]);
    const savings = currentDiff - newDiff;

    maxSavings = Math.max(maxSavings, savings);
  }

  return (absSum - maxSavings) % (Math.pow(10, 9) + 7);
};

// console.log(minAbsoluteSumDiff([1,7,5], [2,3,5]));
// console.log(minAbsoluteSumDiff([2,4,6,8,10], [2,4,6,8,10]));
console.log(minAbsoluteSumDiff(
  [57,42,21,28,30,25,22,12,55,3,47,18,43,29,20,44,59,9,43,7,8,5,42,53,99,34,37,88,87,62,38,68,31,3,11,61,93,34,63,27,20,48,38,5,71,100,88,54,52,15,98,59,74,26,81,38,11,44,25,69,79,81,51,85,59,84,83,99,31,47,31,23,83,70,82,79,86,31,50,17,11,100,55,15,98,11,90,16,46,89,34,33,57,53,82,34,25,70,5,1],
  [76,3,5,29,18,53,55,79,30,33,87,3,56,93,40,80,9,91,71,38,35,78,32,58,77,41,63,5,21,67,21,84,52,80,65,38,62,99,80,13,59,94,21,61,43,82,29,97,31,24,95,52,90,92,37,26,65,89,90,32,27,3,42,47,93,25,14,5,39,85,89,7,74,38,12,46,40,25,51,2,19,8,21,62,58,29,32,77,62,9,74,98,10,55,25,62,48,48,24,21]
));
