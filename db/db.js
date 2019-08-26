const Sequelize = require('sequelize');

// const db = new Sequelize({
//     logging: false
// });

const databaseURL =
   process.env.DATABASE_URL || 'postgres://localhost:5432/amazething';
const db = new Sequelize(databaseURL, {
   logging: false, // so we don't see all the SQL queries getting made
});
module.exports = db;
