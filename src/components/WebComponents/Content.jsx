import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Articles from './Articles'
import BuildWorkout from './BuildWorkout'
import Header from './Header'
import Current from './Current'
import Profile from './profileComponents/Profile'
import Favorites from './Favorites'

function Content({isLoggedIn}) {
   if (isLoggedIn) {
    return (
      <div id='content'>
        <Header />
        <main>
        <Switch>
          <Route path='/workout/build'>
            <BuildWorkout />
          </Route>
          <Route path='/workout/articles'>
            <Articles />
          </Route>
          <Route path='/workout/profile'>
            <Profile />
          </Route>
          <Route path='/workout/current'>
            <Current />
          </Route>
          <Route path='/workout/favorites'>
            <Favorites />
          </Route>
        </Switch>
        </main>
      </div>
    )
   } else {
     <Redirect to='/' />
   }
}

export default Content
