const Workouts = require('../models/workouts');
const sequelize = require('../database/sequelize');

module.exports = {
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
    // const current = await Users.update({current: req.body.id}, {where: {id: req.body.user}})
    await sequelize.query(`UPDATE users SET current = ${req.body.id} WHERE id = ${req.body.user}`)
    res.status(200).send('success')
  },
  deleteWorkout: async (req, res) => {
    await sequelize.query(`DELETE FROM workouts WHERE id = ${req.body.id}`)
    res.status(200).send("success!")
  }
}