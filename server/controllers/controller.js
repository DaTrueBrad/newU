const Article = require('../models/articles')
const Users = require('../models/users')
const bcrypt = require("bcrypt");
const { Redirect } = require('react-router');

module.exports = {
  getArticles: async (req, res) => {
    try {
      const article = await Article.findAll();
      console.log(article);
      res.status(200).send(article);
    } catch {
      console.log("bad juju");
    }
  },
  newUser: async (req, res) => {
    const {username, password} = req.body
    console.log(username)

    //hash password
    const salt = bcrypt.genSaltSync(5)
    const passwordHash = bcrypt.hashSync(password, salt)
    console.log(passwordHash)

    let newUser = await Users.create({
      username,
      password: passwordHash,
      bench_stat: null,
      squat_stat: null,
      deadlift_stat: null,
    })
    if (newUser) {
      console.log(newUser)
      return res.status(200).send(newUser)
    } else {
      return res.status(500).send('unsuccessful')
    }
  },
  login: async (req, res) => {
    const {username, password} = req.body

    const validUser = await Users.findOne({ where: { username: username } });
    if (validUser) {
      console.log('valid user is:',validUser);
      if (bcrypt.compareSync(password, validUser.dataValues.password)) {
        return res.status(200).send('success')
        return;
      } else {
        return res.status(200).send("Password Incorrect");
      }
    } else {
      return res.status(200).send("Username not found. Please check your spelling.");
    }
  }
}