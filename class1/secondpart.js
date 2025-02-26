function sum(a, b) {
  c = a + b;
  display(c);
}
function display(data) {
  console.log(data);
}
// sum(1, 2);

// display(ans);
function calcaulateValue(a, b, type) {
  if (type === "sum") {
    const value = sum(a, b);
    return value;
  }
}
console.log(calcaulateValue(1, 2, "sum"));
function greet() {
  console.log("hello world");
}
setTimeout(() => {
  greet();
}, 3000);
function greetalien() {
  console.log("hello from alien");
}
// setInterval(() => {
//   greetalien();
// }, 3000);
// set time out and set interval got covered here
// opening chat for any thing
let ans = 30;

let interval = setInterval(() => {
  console.log(ans);
  ans--;

  if (ans < 0) {
    // Stops when ans reaches -1
    clearInterval(interval);
  }
}, 1000); // Runs every 1 second
