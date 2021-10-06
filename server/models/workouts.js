const {Sequelize, DataTypes} = require('sequelize')

const connection = require('../database/sequelize')

const Workouts = connection.define(
  "workouts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(75),
    },
    data: {
      type: DataTypes.STRING(100000),
    }
  },
  {
    updatedAt: false,
    timestamps: false,
    createdAt: false,
  }
);

module.exports = Workouts