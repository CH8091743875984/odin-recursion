//Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

//sort the left half of the array (assuming n >1)
//sort the right half of the array (assuming n>1)

//merge the two halves together

function mergeSort(array) {
  if (array.length === 1) {
    // console.log("Exit: " + array);
    return array;
  } else {
    // console.log("Input: " + array);
    const midpoint = Math.trunc(array.length / 2);
    const left = mergeSort(array.slice(0, midpoint));
    const right = mergeSort(array.slice(midpoint));
    // console.log("Left: " + left + " Right: " + right);

    const newArray = [];
    const lenLeft = left.length;
    const lenRight = right.length;
    let i = 0;
    let j = 0;

    while (i < lenLeft && j < lenRight) {
      if (left[i] < right[j]) {
        newArray.push(left[i++]);
      } else {
        newArray.push(right[j++]);
      }
    }
    for (i; i < lenLeft; i++) {
      newArray.push(left[i]);
    }
    for (j; j < lenRight; j++) {
      newArray.push(right[j]);
    }

    return newArray;
  }
}
