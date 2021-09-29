const {DataTypes} = require('sequelize')

const connection = require('../database/sequelize')

const Users = connection.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(255),
    },
    bench_stat: {
      type: DataTypes.INTEGER,
    },
    squat_stat: {
      type: DataTypes.INTEGER,
    },
    deadlift_stat: {
      type: DataTypes.INTEGER,
    },
  },
  {
    updatedAt: false,
    timestamps: false,
    createdAt: false,
  }
);

module.exports = Users