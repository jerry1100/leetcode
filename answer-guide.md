# Answer Guide
| Problem | Solution |
| --- | --- |
| 88. Given sorted integer arrays, merge them together as one sorted array | <li>Naive: merge then sort, O((n+m)log(n+m)) time, O(n) space<li>Optimal: two pointer approach to write values in sorted order, O(n+m) time, O(n+m) space<li>Optimal 2: two pointer approach to write values in reverse sorted order from back to front in `nums1` (it was given it had enough space), O(n+m) time, O(1) space |
| 303. Given integer array, implement `rangeSum(left, right)` to get sum between indices, inclusive | <li>Naive: iterate from `left` to `right`, O(n) time, O(1) space<li>Optimal: use a cumulative sum array: `csum(right) - csum(left)`, O(n) preprocessing time, O(1) time, O(n) space |
| 304. Given 2d matrix, implement `sumRegion(row1, col1, row2, col2)` to get sum of the matrix region | <li>Naive: nested loop to iterate through region, O(mn) time, O(1) space<li>Optimal: use cumulative sum array: `csum(row2, col2) - csum(row1-1, col2) - csum(row2, col1-1) + csum(row1-1, col1-1)`, O(mn) preprocessing time, O(1) time, O(mn) space
