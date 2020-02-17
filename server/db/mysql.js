const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '159357',
  database: 'movie_app',
  multipleStatements: true,
  charset: 'utf8'
});


module.exports = pool.promise();