const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

// 전체 조회
router.get("/", (req, res) => {
  mysql.query("board", "boardList")
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 단건 조회
router.get("/:bno", (req, res) => {
  mysql.query("board", "getBoard", [req.params.bno])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 등록
router.post("/", (req, res) => {
  mysql.query("board", "insertBoard", [req.body])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 수정
router.put("/:bno", (req, res) => {
  mysql.query("board", "updateBoard", [req.body, req.params.bno])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 삭제
router.delete("/:bno", (req, res) => {
  mysql.query("board", "delteBoard", [req.params.bno])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

module.exports = router;