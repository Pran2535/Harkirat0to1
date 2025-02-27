function getlength(str) {
  console.log("original length: " + str);
  console.log("length of string: " + str.length);
  return "tora_mai_ke_chodo";
}
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));
console.log(getlength("hello world"));
function findIndexof(str, target) {
  console.log("found indexof: " + str.lastIndexOf(target));
}
findIndexof("hello world world", "world");
function getslice(str, start, end) {
  console.log("original string", str);
  console.log("after slice", str.slice(start, end));
}
getslice("hello world", 0, 5);
let ans = "harkirat singh".slice(0, 5);
console.log("ans", ans);

function cutIt(str, startIndex, endIndex) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      newstr += str[i];
    }
  }
  return newstr;
}

const value = "pranav kumar";
let ans2 = value.slice(2, 5);
console.log(ans2);
console.log(cutIt(value, 2, 5));
const value2 = "hi mine name is pranav";
const words = value2.split(" ");
console.log(words);

const value3 = "   Pranav kumar  ";
console.log(value3.trim());
console.log(value3.toUpperCase());
console.log(value3.toLowerCase());
