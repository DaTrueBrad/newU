const Article = require('../models/articles')
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
}