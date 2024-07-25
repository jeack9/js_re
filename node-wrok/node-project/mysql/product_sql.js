const sql = {
  prodInsert : "INSERT INTO product SET ?",
  prodUpdate : "UPDATE product SET ? WHERE ?",
  prodDelete : "DELETE FROM product WHERE ?",
  prodList : "SELECT * FROM product",
  prodGet : "SELECT * FROM product WHERE ?"
}

module.exports = sql;