import React from 'react'
import { Route, Switch } from 'react-router'
import Articles from './Articles'
import BuildWorkout from './buildComponents/BuildWorkout'
import Header from './Header'
import Current from './currentComponents/Current'
import Profile from './profileComponents/Profile'
import Favorites from './favoriteComponents/Favorites'
import Programs from './programComponents/Programs'
import Footer from './Footer'

// This is a router for everything the user sees once they are logged in. It checks to see if the user has proper authentication to be here, and if so, it will let them continue. If not, well they get prompted to go back to the landing page and log in.

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
        <Footer />
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
