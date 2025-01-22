const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()

const sequelizeDBConn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

(async () => {
    try {
        await sequelizeDBConn.authenticate();
        console.log("Successfully connected to Database")
    } catch (err) {
        console.log('Error connecting to Database:', err)
    }
})()

module.exports = sequelizeDBConn