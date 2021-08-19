// N: length of matrix
// Time: O(N^2)
// Space: O(1)

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const last = n - 1 - layer;

        for (let i = 0; i < last - layer; i++) {
            const topLeft = matrix[layer][layer + i];

            // Top left = bottom left
            matrix[layer][layer + i] = matrix[last - i][layer];

            // Bottom left = bottom right
            matrix[last - i][layer] = matrix[last][last - i];

            // Bottom right = top right
            matrix[last][last - i] = matrix[layer + i][last];

            // Top right = top left
            matrix[layer + i][last] = topLeft;
        }
    }
}
