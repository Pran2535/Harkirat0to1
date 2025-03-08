// the place where the request goes and some response comes back a very big data center by google is called the backend server
// frontend is used to send the request to the backend and the backend sends the response to us and backend connnects to the frontend
// an http server is someone who takes input from the frontend client and sends request to the backend to the server
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.post("/backend-api/conversation", function (req, res) {
  const message = req.body.message;
});
app.get("/", (req, res) => {
  let ans = 10;
  for (let i = 0; i < 10000000000000000000; i++) {
    ans += i;
  }

  res.send(ans.toString());
});
app.post("/conversations", (req, res) => {
  res.send("Hello from server");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
// fetch("https://google.com").then(async);
