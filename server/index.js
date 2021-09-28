const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const { Sequelize, INTEGER, where } = require("sequelize");
require("dotenv").config();
const { DataTypes } = require("sequelize"); // Import the built-in data types


const port = process.env.PORT;
app.use(express.json());
app.use(cors());

// const sequelize = new Sequelize(`${process.env.string}`)

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const Articles = sequelize.define(
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

app.get("/getcommand", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

app.get("/article", async (req, res) => {
  try {
    const article = await Articles.findAll();
    res.status(200).send(article);
  } catch {
    console.log("bad juju");
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
