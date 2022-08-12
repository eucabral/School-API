const Sequelize = require('sequelize')
const conn = require('../db')

const director = conn.define('director',{
    id : {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = director