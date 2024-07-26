const sql = {
  customerInsert: "INSERT INTO customer SET ?",
  customerUpdate: "UPDATE customer SET ? WHERE id = ?",
  customerDelete: "DELETE FROM customer WHERE id = ?",
  customerGet: "SELECT * FROM customer where id = ?",
  customerList: "SELECT * FROM customer ORDER BY id DESC",
  customerListPaging: "SELECT * FROM customer ORDER BY id DESC LIMIT ?, ?",
  total: "select count(1) as total from customer"
}

module.exports = sql;