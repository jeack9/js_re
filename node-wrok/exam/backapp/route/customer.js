const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

router.get("/", (req, res) => {
  res.send("커스터머");
});

module.exports = router;
