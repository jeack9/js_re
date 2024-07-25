const express = require("express");
const router = express.Router();

const mysql = require("mysql2");

// mysql 접속 정보
const conn = 
{ host: "localhost",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop"
};

// 전체조회
router.get("/", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  // 쿼리실행
  connection.query("SELECT * FROM customer", (err, result, feild) => {
    if(err) console.log(err);
    else res.send(result);
  });
  connection.end();
});

// 단건조회
router.get("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  // 쿼리실행
  let sql = `SELECT * FROM customer where id = ?`;
  connection.query(sql, req.params.id, (err, result, feild) => {
    if(err) console.log(err);
    else res.send(result);
  });
  connection.end();
});

// 등록
router.post("/", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  // 쿼리실행
  let sql = `INSERT INTO customer SET ?`;
  connection.query(sql, req.body, (err, result, feild) => {
    if(err) console.log(err);
    else res.send(result);
  });
  connection.end();
});

// 수정
router.put("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  // 쿼리실행
  let sql = `UPDATE customer SET ? WHERE id = ?`;
  connection.query(sql, [req.body, req.params.id], (err, result, feild) => {
    if(err) console.log(err);
    else res.send(result);
  });
  connection.end();
});

// 삭제
router.delete("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  // 쿼리실행
  let sql = `DELETE FROM customer WHERE id =  ?`;
  connection.query(sql, [req.params.id], (err, result, feild) => {
    if(err) console.log(err);
    else res.send(result);
  });
  connection.end();
});

module.exports = router;