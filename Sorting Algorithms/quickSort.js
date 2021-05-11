function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const lessArray = [];
    const greaterArray = [];
    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? lessArray.push(el) : greaterArray.push(el);
    }
    return [...quickSort(lessArray), pivot, ...quickSort(greaterArray)];

}

const testArray = [1, 34, 5, 453, 97, 44, 2, 4352, 4, 76, 90, 124, 333];


console.log("*****************************");
console.log("        QUICK SORT!");
console.log("*****************************");

console.log("Before: ")
console.log(testArray);
console.log(' ');
console.log("After: ");
console.log(quickSort(testArray));
