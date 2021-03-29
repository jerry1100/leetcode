# Answer Guide
| Problem | Solution |
| --- | --- |
| 303. Given integer array, implement `rangeSum(left, right)` to get sum between indices, inclusive | Naive: iterate from `left` to `right`, O(n) time, O(1) space<br><br>Optimal: use a cumulative sum array: `csum(right) - csum(left)`, O(n) preprocessing time, O(1) time, O(n) space |
| 304. Given 2d matrix, implement `sumRegion(row1, col1, row2, col2)` to get sum of the matrix region | Naive: nested loop to iterate through region, O(mn) time, O(1) space<br><br>Optimal: use cumulative sum array: `csum(row2, col2) - csum(row1-1, col2) - csum(row2, col1-1) + csum(row1-1, col1-1)`, O(mn) preprocessing time, O(1) time, O(mn) space
| 123. Foo | Naive: foo<br><br>Optimal: bar |
| 123. Foo | Naive: foo<br><br>Optimal: bar |
| 123. Foo | Naive: foo<br><br>Optimal: bar |
| 123. Foo | Naive: foo<br><br>Optimal: bar |
