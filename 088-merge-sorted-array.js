/*
  Naive solution:
    Write nums2 into nums1, then sort

  Time complexity:
    Copy n elements: n
    Sort n + m elements: (n + m)log(n + m)
    Total: O((n + m)log(n + m))

  Space complexity:
    qsort uses O(n) space worst case
 */
    function solve(nums1, m, nums2, n) {
      for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
      }

      nums1.sort((a, b) => a - b);
    }


    /*
      Optimal solution:
        Given the arrays are already nums1, we can just have two pointers to the
        beginning of each array, compare them to get the lesser one, then increment
        the pointer

      Time complexity:
        Copy toReturn into nums1: O(m)
        Copy sorted values using pointers O(m + n)
        Total: O(m) + O(m + n) = O(m + n)

      Space complexity:
        Copy toReturn into nums1: O(m)
        Total: O(m)
     */
    function solve2(toReturn, m, nums2, n) {
      const nums1 = toReturn.slice(0, m);

      let i = 0;
      let it1 = 0;
      let it2 = 0;

      while (it1 < m && it2 < n) {
        const val1 = nums1[it1];
        const val2 = nums2[it2];

        if (val1 < val2) {
          toReturn[i++] = val1;
          it1 += 1;
        } else {
          toReturn[i++] = val2;
          it2 += 1;
        }
      }

      while (it1 < m) {
        toReturn[i++] = nums1[it1++];
      }

      while (it2 < n) {
        toReturn[i++] = nums2[it2++];
      }
    }

    /*
      Alternative solution where we combine the three while loops into a single for loop.
      We use a for loop that counts from 0 to m + n, then inside we check if we are either:
        a) nums1 is invalid OR (nums2 is valid and val2 < val1), then add nums2
        b) else add nums1 (if nums1 is invalid, then nums2 MUST be valid due to their sum)

      We can actually just check if val1 < val2, since we spliced the array to make a copy
      in the beginning, values after m will be out of bounds and will return undefined,
      which is less than any number. However, since we don't want to rely on that subtle
      behavior, let's make it explicity by adding an out-of-bounds check and defaulting to
      Infinity.

      Same time and space complexity as before.
     */
    function solve2a(toReturn, m, nums2, n) {
      const nums1 = toReturn.slice(0, m);

      let it1 = 0;
      let it2 = 0;

      for (let i = 0; i < m + n; i++) {
        const val1 = nums1[it1] ?? Infinity;
        const val2 = nums2[it2] ?? Infinity;

        if (val1 < val2) {
          toReturn[i] = val1;
          it1 += 1;
        } else {
          toReturn[i] = val2;
          it2 += 1;
        }
      }
    }

    /*
      Optimal solution 2:
        Since nums1 comes pre-allocated with enough space to fit both nums1 and nums2, we
        don't need to copy nums1 into a new array to do our comparisons. We can instead
        just reference nums1 directly.

        Since the values are sorted from least to greatest we need to preserve the order
        in the front. nums1 is padded at the end, so we can work backwards and start
        filling in data from biggest to smallest.

        Time complexity:
          Go through both arrays: O(m + n)

        Space complexity:
          No extra space needed: O(1)
     */

    function solve3(nums1, m, nums2, n) {
      let it1 = m - 1;
      let it2 = n - 1;

      for (let i = m + n - 1; i >= 0; i--) {
        const val1 = nums1[it1] ?? -Infinity;
        const val2 = nums2[it2] ?? -Infinity;

        if (val1 > val2) {
          nums1[i] = val1;
          it1 -= 1;
        } else {
          nums1[i] = val2;
          it2 -= 1;
        }
      }
    }

    //                   v        v
    const nums1 = [1, 2, 3, 0, 0, 0];

    //                   v
    const nums2 = [2, 5, 6];

    solve3(nums1, 3, nums2, 3);

    console.log(nums1);
