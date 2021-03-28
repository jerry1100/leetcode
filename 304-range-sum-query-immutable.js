/*
  Naive solution:
    Use a nested loop to sum up the elements within the provided rows, cols:

    sum = 0;
    for (i = row1; i <= row2; i++) {
      for (j = col1; j <= col2; j++) {
        sum += matrix[i][j];
      }
    }

    Note: the problem didn't say we need to allocate new memory for the
    matrix, so we're just going to assign our member variable to the passed
    in matrix. However, we could easily instantiate a new matrix by
    iterating through the rows and pushing the columns to a new array.

  Time complexity:
    sumRegion: worst case, visit every cell, O(nm)

  Space complexity:
    No space needed, O(1)
 */

    class NumMatrix {
      constructor(matrix) {
        this.matrix = matrix;
        this.savedSums = this.precompute2();
      }

      sumRegion(row1, col1, row2, col2) {
        let sum = 0;

        for (let i = row1; i <= row2; i++) {
          for (let j = col1; j <= col2; j++) {
            sum += this.matrix[i][j];
          }
        }

        return sum;
      }
    }

    /*
      Optimal solution:
        Because sumRegion() will be called multiple times within a single run,
        we can use memoization to save past results and try to reuse them.

        To visualize this, consider a bunch of calls to sumRegion(), aka a
        bunch of rectangles in the matrix. The overlap is all wasted
        computation.

        Is it possible to save every combination of rows? Or are there too many combos?
        Consider:
          1 1
          1 1

        (0, 0, 0, 0)
        (0, 0, 0, 1)
        (0, 0, 1, 0)
        (0, 0, 1, 1)

          1 1

        (0, 0, 0, 0)
        (0, 0, 0, 1)
        (0, 1, 0, 0) x - not valid since second point has to be >= first point
        (0, 1, 0, 1)

        So it's looking like there are n^2*m^2 combinations, which is a lot of space.

        At this point, 45-minutes was up so I looked at the solution. The next solution
        is to use more memory to get a faster compute time. We would precompute all the
        potential answers, then look them up in constant time.

        For storage, we can use an object and key it by the coordinates, delimited by
        a comma.

      Time complexity:
        precompute(): computing all possible combinations, O(m^2*n^2)
        sumRegion(): constant lookup, O(1)

      Space complexity:
        Saving a sum for every combination, O(m^2*n^2)
     */

    NumMatrix.prototype.precompute = function() {
      const savedSums = {};

      const rowLength = this.matrix.length;
      const colLength = this.matrix[0].length; // n > 0 so first col will be there

      for (let startRow = 0; startRow < rowLength; startRow++) {
        for (let startCol = 0; startCol < colLength; startCol++) {
          // When we move from left to right, sum up the columns in the current row. It gets
          // hairy when we move to a new row, because we need to reset the column sum. Thus,
          // we keep two sums: one for the current row up to some column, and one (which we
          // look up) for all the previous rows, up to some column.
          for (let row = startRow; row < rowLength; row++) {
            let rowSum = 0;

            for (let col = startCol; col < colLength; col++) {
              const prevRowsSum = savedSums[`${startRow},${startCol},${row-1},${col}`] ?? 0;

              rowSum += this.matrix[row][col];

              const sum = rowSum + prevRowsSum;

              savedSums[`${startRow},${startCol},${row},${col}`] = sum;
            }
          }
        }
      }

      return savedSums;
    }

    NumMatrix.prototype.sumRegion2 = function(row1, col1, row2, col2) {
      return this.savedSums[`${row1},${col1},${row2},${col2}`];
    }

    /*
      Optimal solution 2:
        Instead of storing the sum for every possible combination of starting points and
        ending points, we can utilize a cumulative sum matrix and store the sum from (0,0)
        to (y,x). Then if we want to calculate the solution for a rectangle from (y1,x1)
        to (y2,x2), that would be the csum(y2,x2) - csum(y1-1,x2) - csum(y2,x1-1) +
        csum(y1-1,x1-1).

        We can use a 2d array to calculate the cumulative sum matrix and access it via
        this.savedSums[y][x], which will give you the sum of the region from (0,0) to (y,x)
        inclusive.

      Time complexity:
        precompute2(): visits each cell once, O(mn)
        sumRegion3(): constant lookups: O(1)

      Space complexity:
        Storing cumulative sums in 2d matrix: O(mn)

        Note: if we were allowed to modify the input matrix, we could reuse it to store
        our cumulative sum matrix, improving our space complexity to O(1).

      Note: after looking at other submissions, we can clean up precompute2() a bit by
      setting savedSums[row] = [] at the beginning of the row loop, instead of creating
      savedSumsForRow and then setting at after the for loop.
     */
    NumMatrix.prototype.precompute2 = function() {
      const savedSums = []; // will be 2d array

      for (let row = 0; row < this.matrix.length; row++) {
        savedSums[row] = [];
        let rowSum = 0;

        for (let col = 0; col < this.matrix[0].length; col++) {
          rowSum += this.matrix[row][col];

          const prevRowsSum = row > 0 ? savedSums[row-1][col] : 0;

          savedSums[row][col] = rowSum + prevRowsSum;
        }
      }

      return savedSums;
    }

    NumMatrix.prototype.sumRegion3 = function(row1, col1, row2, col2) {
      const sumTotal = this.savedSums[row2][col2];
      const sumAbove = row1 > 0 ? this.savedSums[row1-1][col2] : 0;
      const sumLeft = col1 > 0 ? this.savedSums[row2][col1-1] : 0;
      const sumAboveLeft = row1 > 0 && col1 > 0 ? this.savedSums[row1-1][col1-1] : 0;

      return sumTotal - sumAbove - sumLeft + sumAboveLeft;
    }

    const matrix = new NumMatrix([
    // 0  1  2  3  4
      [3, 0, 1, 4, 2], // 0
      [5, 6, 3, 2, 1], // 1
      [1, 2, 0, 1, 5], // 2
      [4, 1, 0, 1, 7], // 3
      [1, 0, 3, 0, 5], // 4
    ]);

    console.log(
      matrix.sumRegion(2, 1, 4, 3),
      matrix.sumRegion(1, 1, 2, 2),
      matrix.sumRegion(1, 2, 2, 4),
    );

    console.log(
      matrix.sumRegion3(2, 1, 4, 3),
      matrix.sumRegion3(1, 1, 2, 2),
      matrix.sumRegion3(1, 2, 2, 4),
    );
