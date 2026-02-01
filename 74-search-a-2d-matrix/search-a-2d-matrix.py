class Solution:
    def searchMatrix(self, matrix, target):
        if not matrix:
            return False
        m, n = len(matrix), len(matrix[0])
        l, r = 0, m*n - 1
        while l <= r:
            mid = (l + r) // 2
            if matrix[mid//n][mid%n] == target:
                return True
            if matrix[mid//n][mid%n] < target:
                l = mid + 1
            else:
                r = mid - 1
        return False
