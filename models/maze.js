const db = require('../db/db.js');
const Sequelize = require('sequelize');
// const Student = require('./Student')

const Maze = db.define('maze', {
    mazeArray: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        }
    }
});

module.exports = Maze;
