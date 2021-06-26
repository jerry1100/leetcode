/*
  Naive solution:
    update(): update nums in place
    sumRange(): add numbers iteratively

  Time complexity:
    update(): O(1)
    sumRange(): O(n)

    Note: leetcode times out when submitting this

  Space complexity:
    update(): O(1)
    sumRange(): O(1)
 */

    class NumArray {
      constructor(nums) {
        this.nums = nums;
        this.savedSums = this.preCalc();
      }

      update(index, val) {
        this.nums[index] = val;
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
        Create cumulative sum array to calculate sumRange() in constant time.
        Whenever we update, we need to modify the cumulative sum array, taking
        linear time.

        update(): O(n)
        sumRange: O(1)

      The submission was accepted, but was still super slow, ranking only at
      the 12%-ile.
     */
    NumArray.prototype.preCalc = function() {
      const savedSums = [];
      let sum = 0;

      for (let i = 0; i < this.nums.length; i++) {
        sum += this.nums[i];
        savedSums[i] = sum;
      }

      return savedSums;
    };

    NumArray.prototype.sumRange2 = function(left, right) {
      if (left === 0) {
        return this.savedSums[right];
      }

      return this.savedSums[right] - this.savedSums[left - 1];
    };

    NumArray.prototype.update2 = function(index, val) {
      const offset = val - this.nums[index];

      for (let i = index; i < this.savedSums.length; i++) {
        this.savedSums[i] += offset;
      }

      this.nums[index] = val;
    };

    /*
      Optimal solution 2:
        We need to make update() faster. The downside to update() is that we
        need to propagate the changes across the cumulative sum array, which
        is slow.

        What if instead, we keep track of all the changes, then apply them
        when we call sumRange()? The downside of this is that our time and
        space complexity will grow linearly with the number of times update()
        is called.

        We can fix the time complexity scaling issue if we come up with a
        data structure that can give us the offset for an index in a constant
        amount of time.

        At this point I gave up and looked at the solution. The first one
        used a technique called sqrt decomposition. Basically, we break the
        nums array into blocks of size sqrt(n), which we store in memory.
        For rangeSum(), we can sum over the blocks in sqrt(n) time. For
        update(), we just update the block containing the target element.

        This was a pretty tricky problem to implement. I kept getting stuck
        on translating between regular indices and the block indices. I
        eventually got it after taking a step back and doing it on paper,
        which is a good lesson for future problems. I should also practice
        using the drawing mode.

      Time complexity:
        preCalc(): O(n)
        update2(): O(1)
        sumRange2(): O(sqrt(n))

      Space complexity:
        Store block sums, O(sqrt(n))
     */

    NumArray.prototype.preCalc = function() {
      this.blockLen = Math.floor(Math.sqrt(this.nums.length));
      const savedSums = [];

      for (let i = 0; i < this.nums.length; i++) {
        const blockIndex = this.getBlockIndex(i);

        savedSums[blockIndex] = (savedSums[blockIndex] ?? 0) + this.nums[i];
      }

      return savedSums;
    };

    NumArray.prototype.sumRange2 = function(left, right) {
      let sum = 0;
      const firstFullBlockIndex = Math.ceil(left / this.blockLen);
      const lastFullBlockIndex = Math.floor((right + 1)/this.blockLen - 1);

      if (firstFullBlockIndex >= lastFullBlockIndex) {
        for (let i = left; i <= right; i++) {
          sum += this.nums[i];
        }

        return sum;
      }

      // Add nums to left of full block
      for (let i = left; i < firstFullBlockIndex * this.blockLen; i++) {
        sum += this.nums[i];
      }

      // Add blocks
      for (let i = firstFullBlockIndex; i <= lastFullBlockIndex; i++) {
        sum += this.savedSums[i];
      }

      // Add nums to right of full block
      for (let i = (lastFullBlockIndex + 1)*this.blockLen; i <= right; i++) {
        sum += this.nums[i];
      }

      return sum;
    };

    NumArray.prototype.update2 = function(index, val) {
      const offset = val - this.nums[index];
      const blockIndex = this.getBlockIndex(index);

      this.savedSums[blockIndex] += offset;
      this.nums[index] = val;
    };

    NumArray.prototype.getBlockIndex = function(index) {
      return Math.floor(index / this.blockLen);
    }

    /*
      Optimal solution 3:
        Use a segment where the leaves are the original elements of the array,
        and their parents represent the sums of the children.

        preCalc():
          Build the segment tree into an array. Start from index n-1 and work
          down to index 1. The parents are at index 2i and 2i+1.

        update(index, val):
          To update a value at the index, we just need to translate the given
          index to the index in our segment tree array, by adding n to the
          given index. After updating the element, we need to go up the tree
          by continuing to divide the index by 2 and update the sums.

        sumRange(left, right):
          The basic idea is to have two pointers pointed at indices left
          and right. If the left index is a right child, then it's a part
          of the interval but its parent is not. So we add that to the sum and
          move the pointer to its parent. The right side is similar but
          flipped. We do this until the pointers meet.

          Note: in the loop condition, we do leftIndex <= rightIndex. We can
          alternatively do leftIndex < rightIndex and after the loop, check
          if they are equal and sum if they are, but the original is simpler.
          We do need to check if they are equal or else they might cross,
          giving us the wrong answer.

        Time complexity:
          preCalc():
            A balanced binary tree with N leaves will have 2N-1 nodes. So to
            loop and store through will be O(n) time and O(n) space.

          update2():
            A balanced binary tree will have O(log(N)) levels, and since we
            are going up the tree, the update time complexity is O(log(n)).
            No space needed.

          sumRange2():
            Similarly, we are going up the tree, so time is O(log(n)). No
            space needed.
     */

    NumArray.prototype.preCalc = function() {
      const tree = new Array(this.nums.length);

      // From [n, 2n-1], copy over input nums
      tree.push(...this.nums);

      // From [1, n-1], calculate parents
      for (let i = this.nums.length - 1; i > 0; i--) {
        tree[i] = tree[2*i] + tree[2*i + 1];
      }

      this.tree = tree;
    }

    NumArray.prototype.update2 = function(index, val) {
      const diff = val - this.nums[index];
      this.nums[index] += diff;

      // Starting at adjusted index, keep applying diff to parents
      const adjIndex = index + this.nums.length;
      for (let i = adjIndex; i > 0; i = Math.floor(i/2)) {
        this.tree[i] += diff;
      }
    }

    NumArray.prototype.sumRange2 = function(left, right) {
      let leftIndex = left + this.nums.length;
      let rightIndex = right + this.nums.length;

      let sum = 0;

      while (leftIndex <= rightIndex) {
        // If left index is right child (odd), then include node value but
        // not parent. Increment left index so we will choose the parent
        // to the right, who will be in the range..
        if (leftIndex % 2 === 1) {
          sum += this.tree[leftIndex];
          leftIndex += 1;
        }

        // If right index is left child (even), then include node value but
        // not parent. Decrement right index so we will choose the parent
        // to the left, who will be in the range.
        if (rightIndex % 2 === 0) {
          sum += this.tree[rightIndex];
          rightIndex -= 1;
        }

        // Update to parents
        leftIndex = Math.floor(leftIndex/2);
        rightIndex = Math.floor(rightIndex/2);
      }

      return sum;
    }

    const numArray = new NumArray([1, 3, 5]);
    console.log(
      numArray.sumRange(0, 2),
      numArray.update(1, 2),
      numArray.sumRange(0, 2),
    );

    const numArray2 = new NumArray([1, 3, 5]);
    console.log(
      numArray2.sumRange2(0, 2),
      numArray2.update2(1, 2),
      numArray2.sumRange2(0, 2),
    );
