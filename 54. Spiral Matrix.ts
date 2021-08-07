// N: number of items in matrix
// Time: O(N)
// Space: O(1)

function spiralOrder(matrix: number[][]): number[] {
    const positions = [...positionGenerator(matrix)];

    return positions.map(([row, col]) => matrix[row][col]);
}

function* positionGenerator(
    matrix: number[][]
): Generator<[number, number], void, void> {
    let rowMin = 0;
    let rowMax = matrix.length - 1;
    let colMin = 0;
    let colMax = matrix[0].length - 1;
    let direction = 0;

    while (rowMin <= rowMax && colMin <= colMax) {
        switch (direction) {
            case 0: // right
                for (let i = colMin; i <= colMax; i++) {
                    yield [rowMin, i];
                }
                rowMin++;
                break;
            case 1: // down
                for (let i = rowMin; i <= rowMax; i++) {
                    yield [i, colMax];
                }
                colMax--;
                break;
            case 2: // left
                for (let i = colMax; i >= colMin; i--) {
                    yield [rowMax, i];
                }
                rowMax--;
                break;
            case 3: // up
                for (let i = rowMax; i >= rowMin; i--) {
                    yield [i, colMin];
                }
                colMin++;
                break;
        }

        direction = (direction + 1) % 4;
    }
}
