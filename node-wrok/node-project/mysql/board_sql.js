const sql = {
  insertBoard: "INSERT INTO board SET ?", // C
  boardList: "SELECT * FROM board order by board_no desc limit ?, 10", // R
  getBoard: "SELECT * FROM board WHERE board_no = ?", // R
  updateBoard: "UPDATE board SET wdt = curdate(), ? WHERE board_no = ?", // U
  delteBoard: "DELETE FROM board WHERE board_no = ?", // D
  boardCount: "SELECT COUNT(1) cnt FROM board", //
};

module.exports = sql;
