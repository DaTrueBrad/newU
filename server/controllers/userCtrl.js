const Users = require('../models/users')
const sequelize = require('../database/sequelize');
const bcrypt = require('bcrypt')

module.exports = {
  newUser: async (req, res) => {
    const {username, password} = req.body
    const checkUsername = await sequelize.query(`SELECT * From users WHERE username = '${username}'`)
    if(checkUsername[1].rowCount !== 0) {
      res.status(500).send("Username already exists")
    } else {
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
    const userInfo = await sequelize.query(`SELECT id, username FROM users WHERE username = '${username}'`)
    if (newUser) {
      console.log(newUser)
      return res.status(200).send(userInfo)
    } else {
      return res.status(500).send('unsuccessful')
    }
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

  getStats: async (req, res) => {
    const stats = await sequelize.query(`SELECT bench_stat, squat_stat, deadlift_stat, to_char(bench_date, 'MM-DD-YYYY') as bench_date, to_char(squat_date, 'MM-DD-YYYY') as squat_date, to_char(deadlift_date, 'MM-DD-YYYY') as deadlift_date FROM users WHERE id = ${req.query.user}`)
    console.log(stats)
    res.status(200).send(stats)
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
  },
}