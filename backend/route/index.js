const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => {
  res.send("here");
});

globalRouter.post("/", (req, res) => {
  return res.json({ h: "helo" });
});

module.exports = globalRouter;
