import React from 'react'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'

function LandingPage() {
  return (
    <div>
      <img src="./landscape.png" alt="" />
      <div className="button-container">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
      <SignUp />
      <Login />
      <About />
    </div>
  )
}

export default LandingPage
