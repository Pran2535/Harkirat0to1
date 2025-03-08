const user = {
  name: "oranav",
  kidneys: [
    {
      healthy: false,
    },
  ],
};
app.get("/", function (req, res) {
  res.send(user);
});
app.post("/", function (req, res) {
  res.send("POST request received");
});

app.put("/", function (req, res) {
  res.send("PUT request received");
});
app.delete("/", function (req, res) {
  res.send("DELETE request received");
});
