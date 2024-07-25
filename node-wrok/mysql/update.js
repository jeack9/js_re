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
const id = 5
const name = "test5";
const email = "555@545";
const phone = "5555";

// preparestatement
// let sql = `UPDATE customer 
//            SET email = '${email}', phone = '${phone}' 
//            WHERE id = ${id}`;
// connection.query(sql, (err, result, feild) => {
//   if(err){
//     console.log("error : " + err);
//     return;
//   }
//   // sql 결과
//   console.log(result);
// });

const id2 = 3
const name2 = "aaaa";
const email2 = "aaaa@aaa";
const phone2 = "aa";
// preparestatement
let sql2 = `UPDATE customer 
           SET ?
           WHERE id = ?`;
connection.query(sql2, [{name: name2, email: email2, phone: phone2}, id2], (err, result, feild) => {
  if(err){
    console.log("error : " + err);
    return;
  }
  // sql 결과
  console.log(result);
});

// DB 종료
connection.end();