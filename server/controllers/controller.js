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
    //TODO FIgure out a way to hash the password the person sends in, compare it to one on file, and THEN log the user in.
    // const validUser = await Users.findOne({ where: { username: username } });
    const validUser = await sequelize.query(`SELECT * FROM users WHERE username='${username}'`)
    console.log(validUser[0][0].password)
    if (validUser) {
      if (bcrypt.compareSync(password, validUser[0][0].password)) {
        return res.status(200).send((validUser[0][0].id).toString())
      } else {
        return res.status(500).send("Password Incorrect");
      }
    } else {
      return res.status(500).send("Username or Password is incorrect.");
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
    const workout = await sequelize.query(`SELECT w.id, w.name, w.data FROM workouts w, users u WHERE u.id = ${req.query.id} AND u.current = w.id`)
    console.log(workout)
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
  },
  favWorkout: async (req, res) => {
    const {id, user} = req.body
    await sequelize.query(`INSERT INTO favorite_workouts (user_id, workout_id) VALUES ('${user}', '${id}')`)
    res.status(200).send("success!")
  },
  getFavWorkouts: async (req, res) => {
    const favoriteWorkouts = await sequelize.query(`SELECT w.id, w.name, w.data FROM favorite_workouts fw, workouts w WHERE fw.user_id = ${+req.query.user} AND w.id = fw.workout_id`)
    res.status(200).send(favoriteWorkouts)
  },
  favArticle: async (req, res) => {
    const {id, user} = req.body
    await sequelize.query(`INSERT INTO favorite_articles (user_id, article_id) VALUES ('${user}', '${id}')`)
    res.status(200).send("success!")
  },
  getFavArticles: async (req, res) => {
    const favoriteArticles = await sequelize.query(`SELECT a.id, a.title, a.author, a.description, a.url FROM articles a, favorite_articles fa WHERE fa.user_id = ${+req.query.user} AND a.id = fa.article_id`)
    res.status(200).send(favoriteArticles)
  }
}