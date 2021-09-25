import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import User from './User'
import Stats from './Stats'
import Settings from './Settings'

function Profile() {
  return (
    <div className='profile-container'>
      <i class='bx bxs-user-circle' ></i>
      <div className="user-selection-container">
      <NavLink to='/workout/profile/user' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}}>User</NavLink>
      <NavLink to='/workout/profile/stats' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}}>Stats</NavLink>
      <NavLink to='/workout/profile/settings' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}}>Settings</NavLink>
      
      </div>
      <Switch>
        <Route path='/workout/profile/user'>
          <User />
        </Route>
        <Route path='/workout/profile/stats'>
          <Stats />
        </Route>
        <Route path='/workout/profile/settings'>
          <Settings />
        </Route>
      </Switch>
    </div>
  )
}

export default Profile
