import React from 'react'

function User() {
  return (
    <div className='input-container'>
      <input type="text" placeholder="First Name"/>
      <input type="text" placeholder="Last Name"/>
      <input type="text" placeholder="Goal"/>
      <button>Save</button>
    </div>
  )
}

export default User
