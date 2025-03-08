const express = require("express");
const app = express();
const port = 3000;
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if (username === "pranav " && password === "pass") {
    if (kidneyId == 1 || kidneyId == 2) {
      res.json({
        msg: "your kidney is fine ",
      });
    }
  }
  res.status(400).json({ msg: "somethings up with your inputs" });
});
app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
