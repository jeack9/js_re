const sql = {
  boardInsert: "INSERT INTO t_board_board SET ?",
  boardUpdate: "UPDATE t_board_board SET ? WHERE no = ?",
  boardDelete: "DELETE FROM t_board_board WHERE no = ?",
  boardGet: "SELECT * FROM t_board_board where no = ?",
  boardList: "SELECT * FROM t_board_board ORDER BY no DESC",
  boardListPaging: "SELECT * FROM t_board_board ORDER BY no DESC LIMIT ?, 10",
  total: "select count(1) as total from t_board_board",
};

module.exports = sql;
