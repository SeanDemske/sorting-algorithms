function merge(arr1, arr2) {
    let arr1Idx = 0;
    let arr2Idx = 0;
    const mergedArr = [];
    while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
        if (arr1[arr1Idx] < arr2[arr2Idx]) {
            mergedArr.push(arr1[arr1Idx]);
            arr1Idx++;
        } else {
            mergedArr.push(arr2[arr2Idx]);
            arr2Idx++;
        }
    }

    while (arr1Idx < arr1.length) {
        mergedArr.push(arr1[arr1Idx]);
        arr1Idx++;
    }

    while (arr2Idx < arr2.length) {
        mergedArr.push(arr2[arr2Idx]);
        arr2Idx++;
    }

    return mergedArr;
}

function mergeSort(nums) {
    if (nums.length <= 1) return nums;
    const midpoint = Math.floor(nums.length / 2);
    const leftSide = mergeSort(nums.slice(0, midpoint));
    const rightSide = mergeSort(nums.slice(midpoint));
    return merge(leftSide, rightSide);
}

module.exports = { merge, mergeSort};