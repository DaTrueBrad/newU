import React from 'react'

function SignUp() {
  return (
      <div className="input-container">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Re-enter Password"/>
        <button>Register</button>
      </div>
  )
}

export default SignUp
