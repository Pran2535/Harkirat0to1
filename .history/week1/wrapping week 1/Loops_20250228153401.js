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
console.log(findsum(50));
