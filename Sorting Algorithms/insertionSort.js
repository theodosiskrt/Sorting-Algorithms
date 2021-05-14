const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
            else break;
        }
    }
    return array;
}

const testArray = [1, 34, 5, 453, 97, 44, 2, 4352, 4, 76, 90, 124, 333];
console.log("*****************************");
console.log("      INSERTION SORT!");
console.log("*****************************");

console.log("Before: ");
console.log(testArray);
console.log("After");
console.log(insertionSort(testArray));