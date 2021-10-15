const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Articles = require('../models/articles')

module.exports = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}