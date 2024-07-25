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

// DB 커넥션 풀 생성
let pool = mysql.createPool(conn);
pool.getConnection((err, connection) => {
  // sql 실행
  if(err) {
    console.log(err);
    return;
  }
  let sql = "select * from customer"
  connection.query(sql, (err, result, fields) => {
    if(err) console.log(err);
    else console.log(result);

    // DB 접속 종료
    connection.release();
  });
});
