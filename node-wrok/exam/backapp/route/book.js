const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

// 전제조회
router.get("/", async (req, res) => {
  const result = await mysql.query("tBook", "bookList");
  res.send(result);
});
// 단건조회
router.get("/:no", async (req, res) => {
  const result = await mysql.query("tBook", "bookGet", [req.params.no]);
  res.send(result);
});
// 등록
router.post("/", async (req, res) => {
  const result = await mysql.query("tBook", "bookInsert", [req.body]);
  res.send(result);
});
// 수정
router.put("/:id", async (req, res) => {
  const result = await mysql.query("tBook", "bookInsert", [req.body, req.params.id]);
  res.send(result);
});
// 삭제
router.delete("/:id", async (req, res) => {
  const result = await mysql.query("tBook", "bookDelete", [req.params.id]);
  res.send(result);
});

module.exports = router;
