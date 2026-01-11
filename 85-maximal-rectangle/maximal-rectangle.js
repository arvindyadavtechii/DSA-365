/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;

    let cols = matrix[0].length;
    let height = Array(cols).fill(0);
    let max = 0;

    for (let row of matrix) {
        for (let j = 0; j < cols; j++) {
            height[j] = row[j] === '1' ? height[j] + 1 : 0;
        }
        max = Math.max(max, histogramMax(height));
    }
    return max;
};

function histogramMax(h) {
    let stack = [];
    let max = 0;
    h.push(0);

    for (let i = 0; i < h.length; i++) {
        while (stack.length && h[i] < h[stack.at(-1)]) {
            let height = h[stack.pop()];
            let width = stack.length ? i - stack.at(-1) - 1 : i;
            max = Math.max(max, height * width);
        }
        stack.push(i);
    }
    h.pop();
    return max;
}
