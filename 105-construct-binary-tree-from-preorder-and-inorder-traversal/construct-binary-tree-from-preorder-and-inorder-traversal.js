var buildTree = function(preorder, inorder) {

    if (!preorder.length || !inorder.length) {
        return null;
    }

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let index = inorder.indexOf(rootVal);

    root.left = buildTree(
        preorder.slice(1, index + 1),
        inorder.slice(0, index)
    );

    root.right = buildTree(
        preorder.slice(index + 1),
        inorder.slice(index + 1)
    );

    return root;
};