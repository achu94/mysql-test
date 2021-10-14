const db = require("../config/mysql");

async function print_all_promis() {
    return db.getConnection((err, conn) => {
      conn.query("SELECT * FROM data", (err, results) => {
        if (err) return reject(err);

        conn.release();
        return results
    });
  });
}

module.exports = {
  print_all_promis,
};
