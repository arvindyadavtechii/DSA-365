class Solution:
    def subsetsWithDup(self, nums):
        nums.sort()
        res = [[]]
        prev = []
        for i, n in enumerate(nums):
            start = prev if i > 0 and nums[i] == nums[i-1] else res
            prev = [r+[n] for r in start]
            res += prev
        return res
