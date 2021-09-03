const mysql = require('mysql2/promise');

// Reaproveitar as conexoes ao inves de ter que ficar criando novas em novas queries
const connection = mysql.createPool({
  user: 'trybe',
  password: 'trybe12345',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;