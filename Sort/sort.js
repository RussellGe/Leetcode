const arr = require("./arr");
console.log(arr);
function bubbleSort(arr) {
  // 每个人和右边的人比较，如果你比他高就交换位置，否则就不动
  const len = arr.length - 1;
  let n = 0;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      n++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  console.log(arr, len, n);
  return arr;
}
let n = 0;
// 给数组找一个标志位
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const flag = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    // n++
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
}
// 原地快排
function localQuickSort(arr, start, end) {
  function quick(arr, start, end) {
    let init = start;
    let flag = arr[init];
    start++;
    while (start <= end) {
      n++;
      while (arr[end] > flag) {
        end--;
      }
      while (arr[start] < flag) {
        start++;
      }
      if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
    [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
    return start
  }
  if (start < end) {
    let index = quick(arr, start, end);
    localQuickSort(arr, start, index - 1);
    localQuickSort(arr, index, end);
  }
  return arr;
}

// bubbleSort(arr);
// console.log(quickSort(arr), n);
console.log(localQuickSort(arr, 0, arr.length - 1), n);
