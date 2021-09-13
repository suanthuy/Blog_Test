const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database');
const Questions = db.define('Questions', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    questions: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    answer1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer4: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correct:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roll: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

db.sync(); // create database with name user

module.exports = Questions; // User are class