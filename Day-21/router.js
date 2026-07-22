const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/user", (req, res) => {
  res.json({
    message: "User Created Successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});