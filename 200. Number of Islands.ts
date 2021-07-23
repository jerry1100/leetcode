// N: number of rows
// M: number of cols
// Time: O(N*M)
// Space: O(N*M) due to gridCopy and stack frames

enum GridItem {
    Land = "1",
    Water = "0",
}

function numIslands(grid: string[][]): number {
    const gridCopy = grid.map((row) => [...row]);
    let numIslands = 0;

    for (let i = 0; i < gridCopy.length; i++) {
        for (let j = 0; j < gridCopy[0].length; j++) {
            if (gridCopy[i][j] === GridItem.Land) {
                numIslands++;

                // Flood the island so we don't count it again
                flood(gridCopy, i, j);
            }
        }
    }

    return numIslands;
}

function flood(grid: string[][], row: number, col: number): void {
    if (grid[row]?.[col] !== GridItem.Land) {
        return;
    }

    grid[row][col] = GridItem.Water;

    flood(grid, row - 1, col);
    flood(grid, row + 1, col);
    flood(grid, row, col - 1);
    flood(grid, row, col + 1);
}
