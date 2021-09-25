import React from 'react'

function Login() {
  return (
    <div className="input-container">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <a href="/workout/build"><button>Login</button></a>
      </div>
  )
}

export default Login
