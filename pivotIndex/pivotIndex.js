/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    let totalSum = 0
    let leftSum = 0

    nums.forEach((num) => {
        totalSum += num
    })
    for (let i = 0; i < nums.length; i++) {
        if (totalSum - leftSum - nums[i] === leftSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
}