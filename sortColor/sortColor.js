/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    const n = nums.length

    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]]

    for (let i = 0, redNum = 0, WhiteNum = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (nums[redNum] === 1) WhiteNum--
            swap(redNum++, i)
        }
        if (nums[i] === 1) swap(redNum + WhiteNum++, i)
    }
}