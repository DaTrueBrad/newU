const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const { Sequelize, INTEGER, where } = require("sequelize");
require("dotenv").config();
const { DataTypes } = require("sequelize"); // Import the built-in data types

const port = process.env.PORT || 4050;
app.use(express.json());
app.use(cors());

// const sequelize = new Sequelize(`${process.env.string}`)

const sequelize = new Sequelize(
  "d8m5fr13vr66f8",
  "mkwtdyzjvwpjgd",
  "c66180b754f31dc205746ffba7b3a449e015c90c653a2bf0db2721c5c8e93183",
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
