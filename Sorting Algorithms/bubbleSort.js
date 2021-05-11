
let found = true;
const bubbleSort = (array) => {
    let i = array.length
    while (i >= 0 && found == true) {
        found = false;
        for (let j = 0; j < i; j++)
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
                found = true;
            }
    }
    return array;
}

const testArray = [1, 34, 5, 453, 97, 44, 2, 4352, 4, 76, 90, 124, 333];
console.log("*****************************");
console.log("       BUBBLE SORT!");
console.log("*****************************");

console.log("Before: ");
console.log(testArray);
console.log("After");
console.log(bubbleSort(testArray));