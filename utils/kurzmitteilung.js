const db = require("../config/mysql");

function print_all_promis() {
  return new Promise(function (resolve, reject) {
    return db.getConnection((err, conn) => {
      conn.query("SELECT * FROM data", (err, results) => {
        if (err) return reject(err);

        resolve(results);
      });
    });
  });
}

module.exports = {
  print_all_promis,
};
