const { Sequelize, Model } = require('sequelize');

const db = new Sequelize('survey', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

db.authenticate()
    .then(() => console.log('Connect to DB succesfully!!!!!!!'));

module.exports = db;