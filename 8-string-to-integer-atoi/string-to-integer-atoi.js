/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    while (i < s.length && s[i] === ' ') {
        i++;
    }

    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i] - '0');

        if (sign * num <= INT_MIN) return INT_MIN;
        if (sign * num >= INT_MAX) return INT_MAX;

        i++;
    }

    return sign * num;
};
