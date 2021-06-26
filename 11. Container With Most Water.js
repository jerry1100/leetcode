/*
  Naive solution:
    Try out all combinations of start and stop positions, calculating the area based on index and
    the minimum heights between the two.

  Algorithm:
    maxSoFar = 0

    for start = 0; start < height.length - 1; start++
      for end = start + 1; end < height.length; end++
        areaHeight = min(height[start], height[end])
        areaWidth = end - start

        maxSoFar = max(maxSoFar, areaHeight * areaWidth)

    return maxSoFar

  Analysis:
    Time: O(n^2)
    Space: O(1)

  This solution exceeded the time limit on leetcode, so try the optimized one.
 */
function maxArea(height) {
  let maxSoFar = 0;

  for (let start = 0; start < height.length - 1; start++) {
    for (let end = start + 1; end < height.length; end++) {
      const areaHeight = Math.min(height[start], height[end]);
      const areaWidth = end - start;

      maxSoFar = Math.max(maxSoFar, areaHeight * areaWidth);
    }
  }

  return maxSoFar;
}

/*
  Optimal solution:
    The crux of the problem is: how do we know what to include in our window?

    After some thinking, I came up with a potential solution using two pointers, one at each end.
    The idea is that we'll move the pointer with the smallest height inward, while calculating the
    area using the smaller of the two heights, the distance between them, and keeping track of the
    max area so far.

    I believe this type of problem is a greedy algorithm, where we make decisions to maximize some
    value, eventually leading to the global maximum.

    The decision being made here is figuring out which pointer we should move forward. Obviously, it
    would be unwise to move the pointer with the bigger height, so we move the pointer with the
    smaller height to try and increase our area. Eventually, we should come across the maximum area
    possible.

  Algorithm:
    start = 0
    end = n-1
    maxSoFar = 0

    while start < end
      areaHeight = min(height[start], height[end])
      areaWidth = end - start
      maxSoFar = max(maxSoFar, areaHeight * areaWidth)

      if height[start] < height[end]
        start++;
      else
        end--;

  Analysis:
    Time: O(n)
    Space: O(1)
 */
function maxArea(height) {
  let start = 0;
  let end = height.length - 1;
  let maxSoFar = 0;

  while (start < end) {
    const areaHeight = Math.min(height[start], height[end]);
    const areaWidth = end - start;
    const area = areaHeight * areaWidth;

    maxSoFar = Math.max(maxSoFar, area);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxSoFar;
}
