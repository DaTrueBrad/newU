import React from 'react'
import { Route, Switch } from 'react-router'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'

function LandingPage() {

  function DisplaySignUp() {
    return <SignUp />
  }
  return (
    <div>
      {/* //TODO Put this JSX into a seperate component so it doesn't reload each time you push a button. Oissibly use state and use the buttons tio change the state, then use if statements to select what is loaded onto the page. */}
      <img src="./landscape.png" alt="" />
      
      <displaySignUp />
      <Switch>
        <Route exact path='/'>
          <div className="button-container">
            <button>Sign Up</button>
            <a href="/login"><button>Log In</button></a>
          </div>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
      <About />
    </div>
  )
}

export default LandingPage
