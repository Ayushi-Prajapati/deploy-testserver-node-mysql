const mysql = require("mysql2");
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "empdb",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Eroor in DB connection: " + JSON.stringify(err));
  } else {
    console.log("DB connected successfully");
  }
});
module.exports = mysqlConnection;
