const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");
const pageDTO = require("../mysql/pageDTO");

// 전체 조회
// router.get("/", (req, res) => {
//   mysql.query("board", "boardList")
//     .then(result => res.send(result))
//     .catch(err => console.log(err));
// });

// 전체 조회 paging /board?page=1
router.get("/", async (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  let offset = (page - 1) * 10;
  let list = await mysql.query("board", "boardList", offset);
  let total = await mysql.query("board", "boardCount");
  // res.send(list);
  let dto = new pageDTO(page, total[0].cnt);
  res.send({ list, dto });
});

// 단건 조회
router.get("/:bno", (req, res) => {
  mysql
    .query("board", "getBoard", [req.params.bno])
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// 등록
router.post("/", (req, res) => {
  mysql
    .query("board", "insertBoard", [req.body])
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// 수정
router.put("/:bno", (req, res) => {
  mysql
    .query("board", "updateBoard", [req.body, req.params.bno])
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// 삭제
router.delete("/:bno", (req, res) => {
  mysql
    .query("board", "delteBoard", [req.params.bno])
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

module.exports = router;
