var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));

        maxSum = Math.max(maxSum, node.val + left + right);

        return node.val + Math.max(left, right);
    }

    dfs(root);
    return maxSum;
};