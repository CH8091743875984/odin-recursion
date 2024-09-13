//write iterative fib function

function fibs(number) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const array = [0, 1];
    console.log(n);
    console.log(array);

    while (n >= array.length + 1) {
      array.push(array.slice(-1)[0] + array.slice(-2)[0]);
    }
    return array;
  }
}
//test
//write recursive fib function

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    //call once for efficiency
    const last = fibsRec(n - 1);
    return last.concat(last.slice(-2)[0] + last.slice(-1)[0]);
  }
}
