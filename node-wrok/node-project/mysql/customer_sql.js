const sql = {
  customerInsert: "INSERT INTO customer SET ?",
  customerUpdate: "UPDATE customer SET ? WHERE id = ?",
  customerDelete: "DELETE FROM customer WHERE id = ?",
  customerGet: "SELECT * FROM customer where id = ?",
  customerList: "SELECT * FROM customer",
}

module.exports = sql;