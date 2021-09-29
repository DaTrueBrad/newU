const {Sequelize, DataTypes} = require('sequelize')

const connection = require('../database/sequelize')

const Articles = connection.define(
  "articles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
    },
    author: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.STRING(500),
    },
    url: {
      type: DataTypes.STRING(500),
    },
  },
  {
    updatedAt: false,
    timestamps: false,
    createdAt: false,
  }
);

module.exports = Articles