var buildTree = function(preorder, inorder) {

    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(left, right) {
        if (left > right) return null;

        let rootVal = preorder[preIndex++];
        let root = new TreeNode(rootVal);

        let mid = map.get(rootVal);

        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};