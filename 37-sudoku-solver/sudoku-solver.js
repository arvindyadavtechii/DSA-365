var solveSudoku = function (board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
            }
        }
    }

    function backtrack() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                    for (let ch = 1; ch <= 9; ch++) {
                        let num = ch.toString();
                        if (
                            !rows[i].has(num) &&
                            !cols[j].has(num) &&
                            !boxes[boxIndex].has(num)
                        ) {
                            board[i][j] = num;
                            rows[i].add(num);
                            cols[j].add(num);
                            boxes[boxIndex].add(num);

                            if (backtrack()) return true;

                            board[i][j] = '.';
                            rows[i].delete(num);
                            cols[j].delete(num);
                            boxes[boxIndex].delete(num);
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    backtrack();
};
