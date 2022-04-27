// let s = 'hello'
// console.log(s.padStart(10, '0')) // 00000hello

function leftpad(str, length, ch) {
  const len = length - str.length;
  return Array(len).join(ch) + str;
}

// 二分思路优化
function leftpad2(str, length, ch) {
  let len = length - str.length;
  total = "";
  while (true) {
    if (len & 1) total += ch;
    if (len === 1) return total + str;
    ch += ch;
    len = len >> 1;
  }
}
console.log(leftpad2("hello", 100, "0"));
