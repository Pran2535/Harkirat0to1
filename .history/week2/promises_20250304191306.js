setTimeout(() => {
  console.log("hello world pranav");
  setTimeout(() => {
    console.log("hello saurabh");
  }, 2000);
}, 1000);

function promisifiesmyownsettimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    });
  });
  return p;
}
