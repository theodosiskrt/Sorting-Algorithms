const merge = (array1, array2) => {
    const mergedArray = [];
    let index1 = 0, index2 = 0;
    while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] < array2[index2]) {
            mergedArray.push(array1[index1]);
            index1++;
        }
        else {
            mergedArray.push(array2[index2]);
            index2++;
        }
    }
    return [...mergedArray, ...array1.slice(index1), ...array2.slice(index2)];
}

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

const testArray = [1, 34, 5, 453, 97, 44, 2, 4352, 4, 76, 90, 124, 333];
console.log("*****************************");
console.log("       MERGE SORT!");
console.log("*****************************");

console.log("Before: ");
console.log(testArray);
console.log("After");
console.log(mergeSort(testArray));