/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let result = 0
    let start = 0
    let end = height.length - 1

    while (start < end) {
        const min = Math.min(height[start], height[end])
        result = Math.max(result, min * (end - start))
        if (min === height[end]) end--
        else start++
    }
    return result
}