// the place where the request goes and some response comes back a very big data center by google is called the backend server
// frontend is used to send the request to the backend and the backend sends the response to us and backend connnects to the frontend
// an http server is someone who takes input from the frontend client and sends request to the backend to the server
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
