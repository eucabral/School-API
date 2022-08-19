const Sequelize = require('sequelize')
const conn = require('../db/db')

const director = conn.define('director',{
    id : {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty : true,
        }
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty : true,
        }
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty : true,
        }
    }
})

module.exports = director