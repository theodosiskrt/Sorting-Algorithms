
let found = true;
const bubbleSort = (array) => {
    for (let i = array.length; i > 0; i++) {
        found = false;
        for (let j = 0; j < i; j++)
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
                found = true;
            }
        if (!found) break;
    }
    return array;
}

const testArray = [4352, 34, 5, 1, 453, 97, 44, 2, 4, 76, 90, 124, 333];
console.log("*****************************");
console.log("       BUBBLE SORT!");
console.log("*****************************");

console.log("Before: ");
console.log(testArray);
console.log("After");
console.log(bubbleSort(testArray));