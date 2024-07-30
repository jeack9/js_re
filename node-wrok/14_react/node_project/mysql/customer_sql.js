const sql = {
  customerInsert: "insert customer set ?",
  customerUpdate: "update customer set ? where id = ?",
  customerDelete: "delete from customer where id = ?",
  customerList: "select * from customer",
  customerGet: "select * from customer where id = ?",
};

module.exports = sql;
