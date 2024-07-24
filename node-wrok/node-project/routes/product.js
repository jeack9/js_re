const express = require("express");
const router = express.Router();

// 전체조회
router.get("/", (req, res) => {
  const params = req.query;
  res.send(`get pro ${params.category}, ${params.price}`);
});
// 단건조회
router.get("/:pid", (req, res) => {
  const pid = req.params.pid;
  res.send(`get pro: ${pid}`);
});

// 등록
router.post("/", (req, res) => {
  const body = req.body;
  res.send(`post body: ${body.pid}, ${body.pname}, ${body.price}`);
});

// 수정
router.put("/:pid", (req, res) => {
  const pid = req.params.pid;
  const body = {pid, ...req.body};
  res.send(`put pro: ${body.pid}, ${body.pname}, ${body.price}`);
});

// 삭제
router.delete("/:pid", (req, res) => {
  const pid = req.params.pid;
  res.send(`delete pro: ${pid}`);
});

module.exports = router;