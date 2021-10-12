const mysql = require('mysql');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "dogs",
});

module.exports = {
  getConnection: (callback) => {
    return pool.getConnection(callback);
  } 
}
