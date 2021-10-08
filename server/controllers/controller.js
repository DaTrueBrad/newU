const Article = require('../models/articles')
const Users = require('../models/users')
const bcrypt = require("bcrypt");
const { Redirect } = require('react-router');
const Workouts = require('../models/workouts');
const sequelize = require('../database/sequelize');

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
        return res.status(200).send((validUser.dataValues.id).toString())
      } else {
        return res.status(200).send("Password Incorrect");
      }
    } else {
      return res.status(200).send("Username not found. Please check your spelling.");
    }
  },
  postWorkout: async (req, res) => {
    // console.log(req.body)
    console.log(typeof JSON.stringify(req.body))
    await Workouts.create({
      name: req.body.name,
      data: JSON.stringify(req.body.data),
      created_by: req.body.id
    })
    return res.status(200).send(`${req.body.name} successfully Saved!`)
  },
  getCurrent: async (req, res) => {
    const workout = await sequelize.query("SELECT w.id, w.name, w.data FROM workouts w, users u WHERE u.current = w.id")
    console.log(workout)
    // const workout = await Workouts.belongsTo(Users, {foreignKey: 'current'})
    // console.log('server side')
    res.status(200).send(workout)
  },
  getMyWorkouts: async (req, res) => {
    console.log(req.query)
    const workouts = await Workouts.findAll({where: {created_by: req.query.id} })
    res.status(200).send(workouts)
  },
  selectCurrent: async (req, res) => {
    const current = await Users.update({current: req.body.id}, {where: {id: req.body.user}})
    res.status(200).send('success')
  }
}