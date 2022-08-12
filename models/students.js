const Sequelize = require('sequelize')
const conn = require('../db')

const students = conn.define('students',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
    },
    firstName : {
        type: Sequelize.STRING,
        allownull: false
    },
    lastName : {
        type: Sequelize.STRING,
        allownull: false
    },
    shareholder: {
        type: Sequelize.BOOLEAN,
    },
    description: {
        type: Sequelize.STRING,
        allownull: true
    },
    sex: {
        type: Sequelize.STRING,
        allownull: false
    },
})

module.exports = students