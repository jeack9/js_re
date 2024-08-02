const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

//전체조회
router.get("/", async (req, res) => {
  const result = await mysql.query("board", "boardList");
  res.send(result);
});
// 단건
router.get("/:no", async (req, res) => {
  const result = await mysql.query("board", "boardGet", [req.params.no]);
  res.send(result);
});
//등록
router.post("/", async (req, res) => {
  const result = await mysql.query("board", "boardInsert", [req.body]);
  res.send(result);
});
//수정
router.put("/:no", async (req, res) => {
  const result = await mysql.query("board", "boardUpdate", [req.body, req.params.no]);
  res.send(result);
});
//삭제
router.delete("/:no", async (req, res) => {
  const result = await mysql.query("board", "boardDelete", [req.params.no]);
  res.send(result);
});

module.exports = router;
