import React from 'react'
import { Route, Switch } from 'react-router'
import Articles from './Articles'
import BuildWorkout from './BuildWorkout'
import Header from './Header'
import Profile from './profileComponents/Profile'

function Content() {
  return (
    <div>
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
      </Switch>
      </main>
    </div>
  )
}

export default Content
