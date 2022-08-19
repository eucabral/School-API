const Sequelize = require('sequelize')
const conn = require('../db/db')

const students = conn.define('students',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
    shareholder: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty : true,
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty : true
        }
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty : true
        },
    }
})

module.exports = students