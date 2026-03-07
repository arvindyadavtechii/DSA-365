var levelOrder = function(root) {

    let result = [];

    function dfs(node, level){

        if(!node) return;

        if(result.length === level){
            result.push([]);
        }

        result[level].push(node.val);

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);

    return result;
};