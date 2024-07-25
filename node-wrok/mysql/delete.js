const mysql = require("mysql2");

// mysql 접속 정보
const conn = 
{ host: "localhost",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop"
};

// DB 커넥션 생성
let connection = mysql.createConnection(conn);

// 1. DB 접속 체크
connection.connect(err => {
  if(err){
    console.log("error : " + err.stack);
    return;
  }
  console.log("CONNECT DATABASE!!");
});

// 2. SQL 실행
let id = 5;
// preparestatement
let sql = `DELETE FROM customer WHERE id = ?`;
connection.query(sql, id, (err, result, feild) => {
  if(err){
    console.log("error : " + err);
    return;
  }
  // sql 결과
  console.log(result);
});

// DB 종료
connection.end();