const Sequelize = require('sequelize')
const conn = require('../db/db')

const teachers = conn.define('teachers',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty : true,
        }
    },
    firstName : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty : true,
        }
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty : true,
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty : true,
        },
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty : true,
        },
    },
})

module.exports = teachers