const dbConnection = require("../database/db_connection");

const getData = (name, cb) => {
  dbConnection.query('SELECT date, description, keyword FROM dreams WHERE name = $1', [name], (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  })
}

module.exports = getData;
