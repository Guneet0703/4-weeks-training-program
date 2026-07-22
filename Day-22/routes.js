const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetching all users");
});

router.get("/:id", (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("New user created");
});

router.put("/:id", (req, res) => {
  res.send(`User ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

module.exports = router;