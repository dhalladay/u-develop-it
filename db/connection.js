const mysql = require('mysql2');
require('dotenv').config();

const userName = process.env.user;
const key = process.env.key;

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: userName,
    // Your MySQL password
    password: key,
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;