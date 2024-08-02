const mysql = require("mysql2");
const customerSql = require("./customer_sql");
const bookSql = require("./book_sql");
const boardSql = require("./board_sql");
const bCommentSql = require("./board_comment_sql");

const sql = { customer: customerSql, tBook: bookSql, board: boardSql, bComment: bCommentSql };
// mysql 접속 정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
  connectionLimit: 10,
  dateStrings: "date",
};

let pool = mysql.createPool(conn);

function query(tableName, key, data) {
  return new Promise((resolve, reject) => {
    pool.query(sql[tableName][key], data, (err, result, fields) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = { pool, query };
