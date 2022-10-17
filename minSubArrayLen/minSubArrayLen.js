const minSubArrayLen = (target, nums) => {
    let sum = 0
    let from = 0
    let minLength = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= target) {
            minLength = Math.min(minLength, i - from + 1)
            sum -= nums[from++]
        }
    }
    return minLength === Number.MAX_VALUE ? 0 : minLength
}