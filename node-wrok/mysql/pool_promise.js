const mysql = require("mysql2");

// mysql 접속 정보
const conn = 
{ host: "localhost",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
  connectionLimit: 10  
};

let pool = mysql.createPool(conn);

function query(sql, data){
  return new Promise((resolve, reject) =>{
    pool.query(sql, data, (err, result, fields) =>{
      if(err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = {pool, query};