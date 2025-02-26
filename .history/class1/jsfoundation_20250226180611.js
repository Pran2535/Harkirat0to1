console.log("hello world");
// console.log(a);
// currently it will not work after partially and then it will works out
// so javascript is just time compiled language

let number = 5;
number = "hello world";

console.log(number);
// so javascript is single threaded language
// variable is the containers which holds the data
let a = 10;
console.log(a);
let firstname = "pranav ";
let age = 20;
let isMArried = "moneky";
if (isMArried == true) {
  console.log("he is married");
} else {
  console.log("he is unmarried");
}
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) console.log(arr[i]);
}

const person1 = "pranav";
const gender1 = "male";
const personarray = ["pranav", "rahul", "raj"];
const genderarray = ["male", "female", "third gender"];
for (let i = 0; i < personarray.length; i++) {
  console.log(`${personarray[i]} is a ${genderarray[i]}`);
}
const user1 = {
  firstname: "pranav",
  age: 20,
};

console.log(`${user1.firstname} is ${user1.age} years old`);
function findsum(a, b) {
  return a + b;
}
console.log(findsum(10, 20));
