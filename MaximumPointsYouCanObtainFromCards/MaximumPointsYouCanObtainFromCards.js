/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = (cardPoints, k) => {
    let sum = 0

    if (cardPoints.length == 0) return 0



    for (let i = 0; i < cardPoints.length; i++)
        sum += cardPoints[i]

    if (k == cardPoints.length) return sum

    const windowSize = cardPoints.length - k
    let start = 0
    let end = 0

    for (end = 0; end < windowSize; end++) sum -= cardPoints[end]
    end--
    let max = sum
    while (end < cardPoints.length - 1) {
        sum += cardPoints[start]
        start++
        end++
        sum -= cardPoints[end]
        max = Math.max(max, sum)
    }
    return max



}