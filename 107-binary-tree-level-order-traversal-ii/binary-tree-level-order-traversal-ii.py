from collections import deque

class Solution:
    def levelOrderBottom(self, root):
        if not root:
            return []
        
        res = deque()
        q = deque([root])
        
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            
            res.appendleft(level)
        
        return list(res)