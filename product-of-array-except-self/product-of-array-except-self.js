/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const leftProducts = []
    const rightProducts = []
    const results = []

    leftProducts[0] = 1
    rightProducts[nums.length - 1] = 1

    for (let i = 1; i < nums.length; ++i) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; --i) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1]
    }
    for (let i = 0; i < nums.length; ++i) {
        results[i] = leftProducts[i] * rightProducts[i]
    }
    return results

}