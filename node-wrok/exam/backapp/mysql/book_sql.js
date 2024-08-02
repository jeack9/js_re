const sql = {
  bookInsert: "INSERT INTO t_book SET ?",
  bookUpdate: "UPDATE t_bookk SET ? WHERE no = ?",
  bookDelete: "DELETE FROM t_book WHERE no = ?",
  bookGet: "SELECT * FROM t_book where no = ?",
  bookList: "SELECT * FROM t_book ORDER BY no DESC",
  bookListPaging: "SELECT * FROM t_book ORDER BY no DESC LIMIT ?, 10",
  total: "select count(1) as total from t_book",
};

module.exports = sql;
