const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

// 전체조회
router.get("/", (req, res) => {
  mysql.query("product", "prodList")
    .then(result => res.send(result))
    .catch(err => console.log(err));
});
// 단건조회
router.get("/:prodnum", (req, res) => {
  const prodnum = req.params.prodnum;
  mysql.query("product", "prodGet", [{prodnum}])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 등록
router.post("/", (req, res) => {
  const body = req.body;
  mysql.query("product", "prodInsert", [body])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 수정
router.put("/:prodnum", (req, res) => {
  const prodnum = req.params.prodnum;
  const body = req.body;
  mysql.query("product", "prodUpdate", [body, {prodnum}])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// 삭제
router.delete("/:prodnum", (req, res) => {
  const prodnum = req.params.prodnum;
  mysql.query("product", "prodDelete", [{prodnum}])
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

module.exports = router;