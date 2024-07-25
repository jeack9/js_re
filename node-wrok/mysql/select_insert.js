const pool = require("./pool_promise");

// 2. SQL 실행
const name = "ㅡㅡㅡㅡ";
const email = "a@a.c";
const phone = "010-3333-2222";
// statement
let sql = `INSERT INTO customer (name, email, phone) values ('${name}', '${email}', '${phone}')`;
// connection.query(sql, (err, result, feild) => {
//   if(err){
//     console.log("error : " + err);
//     return;
//   }
//   // sql 결과
//   console.log(result);
// });

// preparestatement
sql = `INSERT INTO customer (name, email, phone) values (?, ?, ?)`; // 배열
sql = `INSERT INTO customer SET ?`; // 객체
pool.query(sql, {name, email, phone}, (err, result, feild) => {
  if(err){
    console.log("error : " + err);
    return;
  }
  // sql 결과
  console.log(result);
});