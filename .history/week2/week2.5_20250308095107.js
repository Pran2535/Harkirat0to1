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

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
