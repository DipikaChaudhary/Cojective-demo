const { DataTypes } = require('sequelize')
const sequelizeDBConn = require('../database/dbConnection')

const taskModel = sequelizeDBConn.define('TaskModel', {
    taskID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deadline: {
        type: DataTypes.DATE,
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = taskModel