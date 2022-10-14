/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
    const count = new Array(101).fill(0)
    const result = new Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }
    for (let i = 1; i <= 100; i++) {
        count[i] += count[i - 1]
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            result[i] = 0
        } else {
            result[i] = count[nums[i] - 1]
        }
    }
    return result
};

