function countingSort(arr) {
    const count = new Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        if (!count[arr[i]]) {
            count[arr[i]] = 1
        } else {
            count[arr[i]] += 1
        }

    }
    return count


}