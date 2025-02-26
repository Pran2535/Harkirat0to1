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
setInterval(() => {
  greetalien();
}, 3000);
