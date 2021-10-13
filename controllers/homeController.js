const { Router } = require("express");
const db = require("../config/mysql");
const kurzmitteilung = require("../utils/kurzmitteilung");

const router = Router();

router.get("/wa", (req, res, next) => {
  const dog = { name: rnd_name(getRandomInt(7)), age: getRandomInt(20), rasa: rnd_name(getRandomInt(10)) };

  db.getConnection((err, conn) => {
    conn.query("INSERT INTO data SET ?", dog, (err, results) => {
      if (err) throw err;

      console.log("Last insert ID: ", results.insertId);
      res.send(results.insertId.toString());
      conn.release();
    });
  });
});

router.get("/", (req, res, next) => {
  return kurzmitteilung.print_all_promis().then( (data) => {
    return res.send(data);
  }).catch(next);
});

router.get("/get", (req, res, next) => {
  db.getConnection((err, conn) => {
    conn.query("SELECT NOW() AS DATA", (err, results) => {
      if (err) throw err;

      console.log(results);
      res.send(results);
      conn.release();
    });
  });
});

router.get("/*", (req, res, next) => {
  res.send("404 not found");
});

const rnd_name = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

module.exports = router;
