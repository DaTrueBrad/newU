// All of the necessary imports to make the server run
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const fCtrl = require('./controllers/favoriteCtrl')
const wCtrl = require('./controllers/workoutCtrl')
const aCtrl = require('./controllers/articleCtrl')
const uCtrl = require('./controllers/userCtrl')
const sequelize = require('./database/db')

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));

// Endpoints
// user endpoints
app.get('/userStats', uCtrl.getStats)
app.put('/submitStats', uCtrl.submitStats)
app.post('/users', uCtrl.newUser)
app.post('/login', uCtrl.login)

// workout endpoints
app.post('/workouts', wCtrl.postWorkout)
app.get('/workouts', wCtrl.getCurrent)
app.delete('/deleteWorkout', wCtrl.deleteWorkout)
app.get('/myworkouts', wCtrl.getMyWorkouts)
app.post('/currentworkout', wCtrl.selectCurrent)

// article endpoints
app.get("/article", aCtrl.getArticles);

// favorite endpoints
app.delete('/removeFavoriteArticle', fCtrl.removeFavArticle)
app.get('/favoritearticles', fCtrl.getFavArticles)
app.get('/favoriteArticleExists', fCtrl.testExistingArticles)
app.post('/favoritearticle', fCtrl.favArticle)
app.get('/favoriteworkout', fCtrl.getFavWorkouts)
app.get('/favoriteWorkoutExists', fCtrl.testExistingWorkouts)
app.post('/favoriteworkout', fCtrl.favWorkout)
app.delete('/removeFavoriteWorkout', fCtrl.removeFavWorkout)


// this is a catch-all for the build environment, allowing it to run prooperly
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

sequelize.connect()

//connection to port
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
