var mysql = require("mysql");

const config = {
  PORT: 5001,
  mysql_pool: mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mysql",
  }),
};

module.exports = config;
