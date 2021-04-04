/*
  Assume intervals are represented as integers. It makes sense to me to
  sort the list by the start time, so that we can process the intervals
  chronologically.

  Questions:
    1. are we allowed to mutate the original array? Yes

  My guess is we can do this in one pass, taking O(n) time. I'm wondering
  if I can modify the array in place so that we don't take O(n) space.

  Algorithm:
    sort the list of intervals by start time
    set current interval to intervals[0]
    for i in 1...intervals.length-1
      if interval.start > current.stop // starting new interval
        push current in answers
        current = interval
        continue

      // At this point, we can assume the interval is connected to the
      // current one
      if interval.stop > current.stop // extending current interval
        replace current.end with interval.end

  Analysis:
    Time: O(nlog(n)) from sorting, then looping through
    Space: O(n) from ans[]

  Can we modify it in place (without ans[])?
    We use two pointers, one to keep track of the current working interval,
    another to keep track of the interval we're reading in.

    If we're just updating the current interval's end time, we can just
    replace the value with the interval we're reading in and move on.

    If we're starting a new interval, we increment the current interval ptr
    and copy the new interval to it.

    At the end, we call splice(currPtr + 1, intervals.length - currPtr + 1)

  New analysis:
    Time: O(nlog(n)) from sorting
    Space: O(log(n)) from sorting
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let currPtr = 0;

  for (let i = 0; i < intervals.length; i++) {
    const [intStart, intStop] = intervals[i];
    const [currStart, currStop] = intervals[currPtr];

    // If new interval's start time > current stop time, interval is over
    if (intStart > currStop) {
      currPtr++;
      intervals[currPtr] = intervals[i];
      continue;
    }

    // At this point, we can assume the new interval is connected to current
    // If the interval's stop is greater than our current interval's stop, then
    // we can extend our current interval
    if (intStop > currStop) {
      intervals[currPtr][1] = intStop;
    }
  }

  const indexToStartDeleting = currPtr + 1;
  intervals.splice(indexToStartDeleting, intervals.length - indexToStartDeleting);

  return intervals;
}

console.log(merge([
  [0, 2],
  [2, 3],
  [4, 5],
  [1, 2],
]));
console.log(merge([
  [0, 0],
  [1, 1],
  [2, 2],
]));
console.log(merge([
  [0, 0],
]));
