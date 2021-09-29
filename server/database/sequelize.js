const {Sequelize} = require('sequelize')
require("dotenv").config();
const {DATABASE, HOST, USER, PASSWORD} = process.env

const connection = new Sequelize(
  DATABASE,
  USER,
  PASSWORD,
  {
    host: "ec2-54-145-110-118.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

  async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

module.exports = connection
