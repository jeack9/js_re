const mysql = require("./pool_promise");

//쿼리 실행
let sql = `select * from customer`;
mysql.query(sql)
  .then(result => console.log(result))
  .catch(err => console.log(err));