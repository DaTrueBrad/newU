import React from 'react'
import { Route, Switch } from 'react-router'
import Articles from './Articles'
import BuildWorkout from './BuildWorkout'
import Header from './Header'
import Current from './Current'
import Profile from './profileComponents/Profile'
import Favorites from './favoriteComponents/Favorites'
import Programs from './programComponents/Programs'

function Content(props) {
   if (props.status) {
    return (
      <div id='content'>
        <Header isLoggedIn={props.isLoggedIn}/>
        <main>
        <Switch>
          <Route path='/dashboard/build'>
            <BuildWorkout />
          </Route>
          <Route path='/dashboard/articles'>
            <Articles />
          </Route>
          <Route path='/dashboard/programs'>
            <Programs />
          </Route>
          <Route path='/dashboard/profile'>
            <Profile />
          </Route>
          <Route path='/dashboard/current'>
            <Current />
          </Route>
          <Route path='/dashboard/favorites'>
            <Favorites />
          </Route>
        </Switch>
        </main>
      </div>
    )
   } else {
     return (
       <div className="not-logged-in">
         <h1>You are not logged in.</h1>
         <h2>Please click here to return to home page</h2>
         <a href="/"><button>Return</button></a>
       </div>
     )
   }
}

export default Content
