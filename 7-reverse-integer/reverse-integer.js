/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let rev = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x !== 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);

        // Overflow check
        if (rev > Math.floor((INT_MAX - digit) / 10)) {
            return 0;
        }

        rev = rev * 10 + digit;
    }

    return sign * rev;
};