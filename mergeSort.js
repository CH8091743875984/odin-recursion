//Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

//sort the left half of the array (assuming n >1)
//sort the right half of the array (assuming n>1)

//merge the two halves together

function mergeSort(array) {
  if (array.length === 1) {
    console.log("Exit: " + array);
    return array;
  } else {
    console.log("Input: " + array);
    const midpoint = Math.trunc(array.length / 2);
    const left = array.slice(0, midpoint);
    const right = array.slice(midpoint);
    console.log("Left: " + left + " Right: " + right);

    const newArray = [];
    const leftValue = mergeSort(left)[0];
    const rightValue = mergeSort(right)[0];

    if (leftValue < rightValue) {
      newArray.push(leftValue);
      newArray.push(rightValue);
    } else {
      newArray.push(rightValue);
      newArray.push(leftValue);
    }
    console.log("Newarray: " + newArray);
    return newArray;
  }
}
