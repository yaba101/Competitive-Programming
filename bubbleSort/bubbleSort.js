"use strict";
exports.__esModule = true;
exports.bubbleSort = void 0;
var bubbleSort = function (nums) {
    var numSwaps = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            if (nums[j] < nums[j - 1]) {
                console.log(nums[j], nums[j - 1]);
                var temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
                numSwaps++;
            }
        }
    }
    console.log("Array is sorted in ".concat(numSwaps, " swaps."));
    console.log('First Element:', nums[0]);
    console.log('Last Element:', nums[nums.length - 1]);
};
exports.bubbleSort = bubbleSort;
(0, exports.bubbleSort)([3, 2, 6, 1, 5]);
