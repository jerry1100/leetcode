// N: number of pixels
// Time: O(N)
// Space: O(N)

function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
): number[][] {
    const newImage = image.map((row) => [...row]);
    const toSee = [[sr, sc]];
    const startColor = image[sr][sc];

    while (toSee.length) {
        const [row, col] = toSee.shift();

        if (newImage[row][col] === newColor) {
            continue;
        }

        newImage[row][col] = newColor;

        const neighbors = [
            [row - 1, col],
            [row + 1, col],
            [row, col - 1],
            [row, col + 1],
        ];

        for (const [nRow, nCol] of neighbors) {
            if (newImage[nRow]?.[nCol] === startColor) {
                toSee.push([nRow, nCol]);
            }
        }
    }

    return newImage;
}
