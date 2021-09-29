const Sequelize = require('sequelize')
const connection = require('./sequelize')

const Articles = require('../models/articles')

module.exports = {
  connect: async () => {
    try {
      await connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}