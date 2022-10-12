export const bubbleSort = (nums: number[]): void => {
	let numSwaps = 0
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[j] < nums[j - 1]) {
				console.log(nums[j], nums[j - 1])
				let temp = nums[j]
				nums[j] = nums[j - 1]
				nums[j - 1] = temp
				numSwaps++
			}
		}
	}
	console.log(`Array is sorted in ${numSwaps} swaps.`)
	console.log('First Element:', nums[0])
	console.log('Last Element:', nums[nums.length - 1])
}
bubbleSort([3, 2, 6, 1, 5])
