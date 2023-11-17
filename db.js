const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hamaleon',
  password: '12QWErty21',
  database: 'webReact',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

module.exports = db;