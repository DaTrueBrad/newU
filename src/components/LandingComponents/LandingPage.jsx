import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import { Route, Switch } from 'react-router'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'

function LandingPage() {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false)
  function DisplaySignUp() {
    
    return <SignUp />
  }

  function showSignup(e) {
    setSignUp(!signUp)
  }
  function showLogin(e) {
    setLogin(!login)
  }

  return (
    <div id='landing-page'>
      {/* //TODO Put this JSX into a seperate component so it doesn't reload each time you push a button. Oissibly use state and use the buttons tio change the state, then use if statements to select what is loaded onto the page. */}
      <img src="./landscape.png" alt="" />
      
      <displaySignUp />
      <Switch>
        <Route exact path='/'>
          <div className="button-container">
            <div className="sign-up-button">
              <button onClick={showSignup}>Sign Up</button>
              <Collapse isOpened={signUp}>
                <div className="input-container">
                  <input type="text" />
                  <input type="password" />
                  <input type="password" />
                  <button>Register</button>
                </div>
              </Collapse>
            </div>
            <div className="login-button">
              <button onClick={showLogin}>Login</button>
              <Collapse isOpened={login}>
                <div className="input-container">
                  <input type="text" />
                  <input type="text" />
                  <a href="/workout/current"><button>Login</button></a>
                </div>
              </Collapse>
            </div>
          </div>
        </Route>
      </Switch>
      <About />
    </div>
  )
}

export default LandingPage
