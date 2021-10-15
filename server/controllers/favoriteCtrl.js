const sequelize = require('../database/sequelize');

module.exports = {
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
  }  
}