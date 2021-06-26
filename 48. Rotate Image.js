/**
 * Time: O(n^2)
 * Space: O(1)
 * n - size of matrix
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const end = n - 1; // index of last row/col in matrix

    // [layer][layer] is the top-left cell
    // [end - layer][end - layer] is the bottom-right cell
    for (let i = layer; i < end - layer; i++) {
      const top = matrix[layer][i]; // save top
      matrix[layer][i] = matrix[end - i][layer]; // top = left
      matrix[end - i][layer] = matrix[end - layer][end - i]; // left = bottom
      matrix[end - layer][end - i] = matrix[i][end - layer]; // bottom = right
      matrix[i][end - layer] = top; // right = top
    }
  }
}
