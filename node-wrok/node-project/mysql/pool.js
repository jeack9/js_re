const mysql = require("mysql2");
const customerSql = require("./customer_sql");
const prodSql = require("./product_sql");
const boardSql = require("./board_sql");
const sql = { customer: customerSql, product: prodSql, board: boardSql };
// mysql 접속 정보
const conn = { host: "localhost", port: "3306", user: "hr", password: "hr", database: "shop", connectionLimit: 10 };

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
