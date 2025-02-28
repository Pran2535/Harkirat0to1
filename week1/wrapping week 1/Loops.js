let ans = 0;
for (let i = 0; i < 1000; i++) {
  ans += i;
}

console.log(ans);
function findsum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));
console.log(findsum(50));

// callback functions

function displayMessage() {
  console.log("I am displaying a message");
}

greet("John", displayMessage);
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
// when we pass one function as an argument to another function, it is called a callback function
