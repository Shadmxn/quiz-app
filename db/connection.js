// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

/*const dbParams = {
  host: "localhost",
  port: 8080,
  user: "labber",
  password: "labber",
  database: "midterm"
};*/
const db = new Pool(dbParams);

db.connect();

module.exports = db;
