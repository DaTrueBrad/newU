// All of the necessary imports to make the server run
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const ctrl = require('./controllers/controller')
const connect = require('./database/db')

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));

// Endpoints
app.get("/article", ctrl.getArticles);
app.post('/users', ctrl.newUser)
app.post('/login', ctrl.login)

//! this is a catch-all for the build environment
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

connect.connect()
//connection to port
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
