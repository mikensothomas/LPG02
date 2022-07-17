// const pg = require('pg')
// const client = new pg.Client({
//   user: 'user',
//   host: 'localhost',
//   database: 'db_name',
//   password: 'db_password',
//   port: 5432,
// });
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

//require('dotenv').config();

// const dbName = process.env.DB_NAME;
// const dbHost = process.env.DB_HOST;
// const dbPort = process.env.DB_PORT;
// const dbUser = process.env.DB_USER;
// const dbPwd = process.env.DB_PASSWORD;

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database'
});

module.exports = sequelize;