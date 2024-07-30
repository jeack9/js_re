const express = require("express");
const router = express.Router();

// mysql 모듈 로드
const mysql = require("mysql2");
// mysql 접속 정보
const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

//전체조회  http://localhost/customer  ?
router.get("/", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);

  //쿼리 실행
  connection.query("select * from customer", (err, results, fields) => {
    if (err) console.log(err);
    res.send(results);
  });
  connection.end();
});

//단건조회 http://localhost/customer/2
router.get("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  let sql = "select * from customer where id=?";
  let id = ________________;
  //쿼리 실행
  connection.query(sql, id, (err, results, fields) => {
    if (err) console.log(err);
    res.sendStatus(500);
  });
  connection.end();
});

//등록
router.post("/", (req, res) => {});

//수정
router.put("/:id", (req, res) => {
  //파라미터 받기
  const data = req.body;
  const id = req.params.id;

  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  //쿼리 실행
  let sql = `update customer set ? where id = ? `;
  connection.query(sql, [data, id], (err, results, fields) => {
    if (err) console.log(err);
    res.send(results);
  });
  connection.end();
});

//삭제
router.delete("/:id", (req, res) => {});

module.exports = router;
