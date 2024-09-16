function mergeSort(array) {
  //sort the left half of the array (assuming n >1)
  const midpoint = Math.trunc(array.length / 2);
  const left = array.slice(midpoint);
  const right = array.slice(array.length - midpoint);

  if (array.length === 1) {
    return array;
  } else if (array.length === 2) {
  }
  //sort the right half of the array (assuming n>1)

  //merge the two halves together
}
