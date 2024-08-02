const sql = {
  commentInsert: "INSERT INTO t_comment_board SET ?",
  commentUpdate: "UPDATE t_comment_board SET ? WHERE no = ?",
  commentDelete: "DELETE FROM t_comment_board WHERE no = ?",
  commentGet: "SELECT * FROM t_comment_board where no = ?",
  commentList: "SELECT * FROM t_comment_board WHERE bno = ? ORDER BY no DESC",
  commentListPaging: "SELECT * FROM t_comment_board WHERE bno = ? ORDER BY no DESC LIMIT ?, 10",
  total: "select count(1) as total from t_comment_board",
};

module.exports = sql;
