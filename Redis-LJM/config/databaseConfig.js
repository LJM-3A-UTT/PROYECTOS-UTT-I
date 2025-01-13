// config/databaseConfig.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "---",
  password: "---",
  database: "---",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Manejar eventos de conexión y error
db.on("error", (err) => {
  console.error("MySQL error:", err);
});

module.exports = db;
