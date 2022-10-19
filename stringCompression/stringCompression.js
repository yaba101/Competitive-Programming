/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    for (let i = 1, count = 1; i <= chars.length; i++) {
        if (chars[i] === chars[i - 1]) count++
        else {
            if (count > 1) {
                i -= count - 1
                chars.splice(i, count - 1, ...count.toString().split(''))
                i += Math.trunc(Math.log10(count)) + 1
            }
            count = 1
        }
    }

    return chars.length
}