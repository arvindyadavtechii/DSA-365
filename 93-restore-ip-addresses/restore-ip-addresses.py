class Solution:
    def restoreIpAddresses(self, s: str):
        res = []
        def dfs(i, path):
            if len(path) == 4:
                if i == len(s):
                    res.append(".".join(path))
                return
            for l in range(1, 4):
                if i + l > len(s):
                    break
                part = s[i:i+l]
                if (part[0] == '0' and l > 1) or int(part) > 255:
                    continue
                dfs(i + l, path + [part])
        dfs(0, [])
        return res
