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

console.log(parseInt("42"));
console.log(parseInt("45"));
let p = parseInt("4850");
console.log(typeof p);

//arrays

const initialarray = [1, 2, 3];
const secondarray = [4, 5, 6];

initialarray.push(20);

initialarray.pop();
console.log(initialarray);
console.log(initialarray.concat(secondarray));
const initialArray = [1, 2, 3];
for (let i = 0; i < initialArray.length; i++) {
  console.log(initialarray[i]);
}
function logthing(str) {
  console.log(str);
}
initialArray.forEach(logthing);
const initalArray = [1, 2, 3];

initalArray.forEach(logthing);

//callbacks ,map, filter, find, sort.
class Animal {
  constructor(name, legcount) {
    this.name = name;
    this.legcount = legcount;
  }
}

const dog = {
  name: "doggie",
  legcount: 4,
  speaks: "bhow bhow",
};
console.log(dog.name, dog.legcount, dog.speaks);

const cat = {
  name: "cat",
  legcount: 4,
  speak: "meow",
};
function printstr(animal) {
  console.log(animal.name, animal.legcount, animal.speaks);
}
console.log(cat.name, cat.legcount, cat.speak);

class animal {
  constructor(name, legcount, speaks) {
    this.name = name;
    this.legcount = legcount;
    this.speaks = speaks;
  }
  speak() {
    console.log(this.speaks);
  }
}
let dog1 = new animal("dog", 4, "bhow bhow");
dog1.speak();
