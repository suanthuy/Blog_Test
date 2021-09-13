const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database');
const User = db.define('Users', {
    account: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

db.sync(); // create database with name user

module.exports = User; // User are class