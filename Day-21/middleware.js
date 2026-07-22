const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request Received");
  next();
});

app.get("/", (req, res) => {
  res.send("Middleware Executed Successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});