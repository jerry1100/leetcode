// N: number of rows
// M: number of cols
// Time: O(N*M)
// Space: O(N+M)

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const rowsToWipe = new Set<number>();
    const colsToWipe = new Set<number>();

    // Track which rows & cols to wipe
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowsToWipe.add(i);
                colsToWipe.add(j);
            }
        }
    }

    // Wipe rows & cols
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rowsToWipe.has(i) || colsToWipe.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}
