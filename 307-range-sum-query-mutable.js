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

const numArray3 = new NumArray([-28,-39,53,65,11,-56,-65,-39,-43,97]);
console.log(
  numArray3.sumRange2(5, 6),
  numArray3.update2(9, 27),
  numArray3.sumRange2(2, 3),
  numArray3.sumRange2(6, 7),
  numArray3.update2(1, -82),
  numArray3.update2(3, -72),
  numArray3.sumRange2(3, 7),
  numArray3.sumRange2(1, 8),
  numArray3.update2(5, 13),
  numArray3.update2(4, -67),
);
