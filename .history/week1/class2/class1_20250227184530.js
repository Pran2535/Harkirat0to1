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
