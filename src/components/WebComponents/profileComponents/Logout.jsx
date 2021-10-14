import React from 'react'

function Logout() {
  function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    window.location = '/'
  }
  return (
    <div>
      <h3>Are you sure you want to log out?</h3>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default Logout
