function fibs(number) {
  if (number === 0) {
    return [0];
  } else if (number === 1) {
    return [0, 1];
  } else {
    const array = [0, 1];
    console.log(number);
    console.log(array);

    while (number >= array.length + 1) {
      array.push(array.slice(-1)[0] + array.slice(-2)[0]);
    }
    return array;
  }
}
