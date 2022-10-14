/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = (s) => {
    const arr = s.split(' ')
    const result = Array(arr.length)
    for (let element of arr) {
        const index = element[element.length - 1]
        result[index - 1] = element.slice(0, element.length - 1)
    }
    return result.join(' ')

}