const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
  const page = req.query.page;
  const search = req.query.search;
  const params = req.query;
  res.send(`get user : (query) ${page}, ${search} `);
});

router.get("/:username", (req, res) => {
  const username = req.params.username;
  res.send(`username: ${username}`);
});

router.post("/", (req, res) => {
  const username = req.body.username;
  const addr = req.body.addr;
  res.send(`post user : ${username}, ${addr}`);
});
router.put("/", (req, res) => res.send("put user"));
router.delete("/", (req, res) => res.send("delete user"));

module.exports = router;