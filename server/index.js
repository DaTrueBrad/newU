// All of the necessary imports to make the server run
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const ctrl = require('./controllers/controller')
const sequelize = require('./database/db')

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));

// Endpoints
// user endpoints
app.get('/userStats', ctrl.getStats)
app.put('/submitStats', ctrl.submitStats)
app.post('/users', ctrl.newUser)
app.post('/login', ctrl.login)
app.post('/workouts', ctrl.postWorkout)
app.get('/workouts', ctrl.getCurrent)
app.delete('/deleteWorkout', ctrl.deleteWorkout)
app.get('/myworkouts', ctrl.getMyWorkouts)
app.post('/currentworkout', ctrl.selectCurrent)
// article endpoints
app.get("/article", ctrl.getArticles);
app.get('/favoritearticles', ctrl.getFavArticles)
app.get('/favoriteArticleExists', ctrl.testExistingArticles)
app.post('/favoritearticle', ctrl.favArticle)
app.delete('/removeFavoriteArticle', ctrl.removeFavArticle)
// workout endpoints
app.post('/workouts', ctrl.postWorkout)
app.get('/workouts', ctrl.getCurrent)
app.delete('/deleteWorkout', ctrl.deleteWorkout)
app.get('/myworkouts', ctrl.getMyWorkouts)
app.post('/currentworkout', ctrl.selectCurrent)
app.get('/favoriteworkout', ctrl.getFavWorkouts)
app.get('/favoriteWorkoutExists', ctrl.testExistingWorkouts)
app.post('/favoriteworkout', ctrl.favWorkout)
app.delete('/removeFavoriteWorkout', ctrl.removeFavWorkout)


// this is a catch-all for the build environment
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

sequelize.connect()
//connection to port
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
