const sql = {
  insertBoard: "INSERT INTO board SET ?", // C
  boardList: "SELECT * FROM board", // R
  getBoard: "SELECT * FROM board WHERE board_no = ?", // R
  updateBoard: "UPDATE board SET ? WHERE board_no = ?", // U
  delteBoard: "DELETE FROM board WHERE board_no = ?" // D
}

module.exports = sql;