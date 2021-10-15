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
    //todo add a validation to ensure the username is not already taken.
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
    //todo perform a query to send back the id and name of the person registering, so we can immediately save them to browser and log them in
    if (newUser) {
      console.log(newUser)
      return res.status(200).send(newUser)
    } else {
      return res.status(500).send('unsuccessful')
    }
  },
  login: async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`SELECT * FROM users WHERE username='${username}'`)
    console.log(validUser[1].rowCount)
    if (validUser[1].rowCount === 1) {
      if (bcrypt.compareSync(password, validUser[0][0].password)) {
        let object = {
          id: validUser[0][0].id,
          username: validUser[0][0].username
        }
        return res.status(200).send(object)
      } else {
        return res.status(500).send("Password Incorrect");
      }
    } else {
      return res.status(500).send("Username or Password is incorrect.");
    }
  },
  postWorkout: async (req, res) => {
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
  removeFavWorkout: async (req, res) => {
    await sequelize.query(`
    DELETE FROM favorite_workouts WHERE user_id = ${req.query.user} AND workout_id = ${req.query.id}`)
    res.status(200).send("success")
  },
  testExistingWorkouts: async (req, res) => {
    console.log(req.query)
    let data = await sequelize.query(`
    SELECT * FROM favorite_workouts WHERE user_id = ${req.query.user} AND workout_id = ${req.query.id}`)
    res.status(200).send(data)
  },
  favArticle: async (req, res) => {
    const {id, user} = req.body
    await sequelize.query(`INSERT INTO favorite_articles (user_id, article_id) VALUES ('${user}', '${id}')`)
    res.status(200).send("success!")
  },
  getFavArticles: async (req, res) => {
    const favoriteArticles = await sequelize.query(`SELECT a.id, a.title, a.author, a.description, a.url FROM articles a, favorite_articles fa WHERE fa.user_id = ${+req.query.user} AND a.id = fa.article_id`)
    res.status(200).send(favoriteArticles)
  },
  testExistingArticles: async (req, res) => {
    let data = await sequelize.query(`
    SELECT * FROM favorite_articles WHERE user_id = ${req.query.user} AND article_id = ${req.query.id}`)
    res.status(200).send(data)
  },
  removeFavArticle: async (req, res) => {
    await sequelize.query(`
    DELETE FROM favorite_articles WHERE user_id = ${req.query.user} AND article_id = ${req.query.id}`)
    res.status(200).send("success")
  },
  getStats: async (req, res) => {
    const stats = await sequelize.query(`SELECT bench_stat, squat_stat, deadlift_stat, to_char(bench_date, 'MM-DD-YYYY') as bench_date, to_char(squat_date, 'MM-DD-YYYY') as squat_date, to_char(deadlift_date, 'MM-DD-YYYY') as deadlift_date FROM users WHERE id = ${req.query.user}`)
    console.log(stats)
    res.status(200).send(stats)
  },
  deleteWorkout: async (req, res) => {
    await sequelize.query(`DELETE FROM workouts WHERE id = ${req.body.id}`)
    res.status(200).send("success!")
  },
  submitStats: async (req, res) => {
    const {squat_stat, bench_stat, deadlift_stat, bench_date, squat_date, deadlift_date, user} = req.body
    await sequelize.query(`
    UPDATE users
    SET bench_stat = ${bench_stat},
    squat_stat = ${squat_stat},
    deadlift_stat = ${deadlift_stat},
    bench_date = '${bench_date}',
    squat_date = '${squat_date}',
    deadlift_date = '${deadlift_date}'
    WHERE id = ${user}
    `)
    res.status(200).send('success')
  }
}