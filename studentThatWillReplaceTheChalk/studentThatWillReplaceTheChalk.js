/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
const chalkReplacer = (chalk, k) => {
    let sum = 0
    for (let i = 0; i < chalk.length; i++) {
        sum += chalk[i]
        k -= chalk[i]
        if (k < 0) {
            return i
        }
    }

    k %= sum
    for (let i = 0; i < chalk.length; i++) {
        k -= chalk[i]
        if (k < 0) {
            return i
        }
    }
    return -1
}

// After recording the prefix and, we don’t need to use dichotomy to find the target student, because in terms of time complexity, it’s the same whether to use dichotomy or not, because the time complexity is mainly used in prefix and.Here we can also use linear time to find the subscript of the student who needs to add chalk.

 // Time o(n)

// Space o(1)