/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    if (n % 2) {
        return myPow(x * x, Math.trunc(n / 2)) * x
    }
    return myPow(x * x, n / 2)
}