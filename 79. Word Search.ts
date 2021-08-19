// N: number of board items
// Time: O(N^2)
// Space: O(N)

function exist(board: string[][], word: string): boolean {
    const visited: boolean[][] = board.map((row) =>
        new Array(row.length).fill(false)
    );

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(board, i, j, word, 0, visited)) {
                return true;
            }
        }
    }

    return false;
}

function backtrack(
    board: string[][],
    row: number,
    col: number,
    word: string,
    pos: number,
    visited: boolean[][]
): boolean {
    if (pos === word.length) {
        return true;
    }

    if (board[row]?.[col] !== word[pos] || visited[row][col]) {
        return false;
    }

    visited[row][col] = true;

    const exists =
        backtrack(board, row + 1, col, word, pos + 1, visited) ||
        backtrack(board, row - 1, col, word, pos + 1, visited) ||
        backtrack(board, row, col + 1, word, pos + 1, visited) ||
        backtrack(board, row, col - 1, word, pos + 1, visited);

    visited[row][col] = false;

    return exists;
}
