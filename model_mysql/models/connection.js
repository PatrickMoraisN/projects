const mysql = require('mysql2/promise');
const data = require('../data');

// Reaproveitar as conexoes ao inves de ter que ficar criando novas em novas queries
const connection = mysql.createPool(data);

module.exports = connection;
