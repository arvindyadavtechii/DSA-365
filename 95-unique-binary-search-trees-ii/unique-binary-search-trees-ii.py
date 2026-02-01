class Solution:
    def generateTrees(self, n: int):
        if n == 0:
            return []
        def build(l, r):
            if l > r:
                return [None]
            res = []
            for i in range(l, r+1):
                for left in build(l, i-1):
                    for right in build(i+1, r):
                        res.append(TreeNode(i, left, right))
            return res
        return build(1, n)
