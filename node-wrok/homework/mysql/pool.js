const mysql = require("mysql2");
const boardSql = require("./board_sql");
const sql = {board: boardSql};

const conn = 
{ host: "localhost",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
  connectionLimit: 10
};

// 커넥션 풀 생성
let pool = mysql.createPool(conn);

// 쿼리 실행 함수
function query(table, key, data){
  return new Promise((resolve, reject) =>{
    pool.query(sql[table][key], data, (err, result, fields) =>{
      if(err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = {pool, query};