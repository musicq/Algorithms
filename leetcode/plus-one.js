/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    let p = 1;

    while (i >= 0) {
        const digit = digits[i];
        const rest = (digit + p) % 10;
        p = Math.floor((digit + p) / 10);

        digits[i] = rest;
        i -= 1;
    }

    if (p > 0) {
        digits.unshift(p);
    }

    return digits;
};
