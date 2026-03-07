var zigzagLevelOrder = function(root) {

    if(!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true;

    while(queue.length){

        let levelSize = queue.length;
        let level = [];

        for(let i = 0; i < levelSize; i++){

            let node = queue.shift();
            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        if(!leftToRight){
            level.reverse();
        }

        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
};