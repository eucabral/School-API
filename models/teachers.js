const Sequelize = require('sequelize')
const conn = require('../db')

const teachers = conn.define('teachers',{
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
    description: {
        type: Sequelize.STRING,
        allownull: true
    },
    sex: {
        type: Sequelize.STRING,
        allownull: false
    },
})

module.exports = teachers