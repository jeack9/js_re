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
// 1. pool connection은 생략 가능 
// 2. SQL 실행 
sql = "SELECT * FROM customer"; 
pool.query(sql, function (err, results, fields) { 
  if (err) {   
    console.log(err);  
  } 
  // 3. 결과 처리 
  console.log(results); 
  //4. 쿼리가 수행되면 connection은 자동으로 해제된다. 
});