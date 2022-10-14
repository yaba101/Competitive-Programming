
function insertionSort1(n, arr) {
    let j = 0
    for (let i = 1; i < arr.length; i++) {
        // pointer is the the second element of the array, we already assume that the first element is sorted
        let pointer = arr[i]

        let j = i - 1

        while (j >= 0 && arr[j] > pointer) {
            arr[j + 1] = arr[j]
            console.log(arr.join(' '))

            j = j - 1

        }
        arr[j + 1] = pointer
    }
    console.log(arr.join(' '))

}

