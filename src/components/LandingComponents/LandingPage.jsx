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
      <img src="./landscape.png" alt="" />
      <div className="button-container">
        <button>Sign Up</button>
        <a href="/login"><button>Log In</button></a>
      </div>
      <displaySignUp />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          {/* <SignUp /> */}
          <About />
        </Route>
      </Switch>
      <About />
    </div>
  )
}

export default LandingPage
