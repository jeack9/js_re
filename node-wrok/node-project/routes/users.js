const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
  // 쿼리스트링
  const page = req.query.page;
  const search = req.query.search;
  const data = req.query;
  // 세션
  const email = req.session.email;

  // 쿠키 읽기
  console.log(req.cookies.cart);

  // 쿠키 저장
  res.cookie("email", email, {expires: new Date(Date.now() + 15000)});

  res.send(`get user : (query) ${page}, ${search} , (session): ${email}`);
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