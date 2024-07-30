const express = require("express");
const router = express.Router();

// mysql 모듈 로드
const mysql = require("../mysql/pool");

//전체조회  http://localhost/customer  ?
router.get("/", (req, res) => {
  //쿼리 실행
  mysql.query("customerList").then((result) => res.send(result));
});

//단건조회 http://localhost/customer/2
router.get("/:id", (req, res) => {
  let id = req.params.id;
  //쿼리 실행
  mysql.query("customerGet", id).then((result) => res.send(result));
});

//등록
router.post("/", async (req, res) => {
  let result = await mysql.query("customerInsert", req.body);
  res.send(result);
});

//수정
router.put("/:id", (req, res) => {
  //파라미터 받기
  const data = req.body;
  const id = req.params.id;
  //쿼리 실행
  mysql.query("customerUpdate", [data, id]).then((result) => res.send(result));
});

//삭제
router.delete("/:id", (req, res) => {
  //파라미터 받기
  const id = req.params.id;
  //쿼리 실행
  mysql.query("customerDelete", [id]).then((result) => res.send(result));
});

module.exports = router;
