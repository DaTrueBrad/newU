import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import User from './User'
import Stats from './Stats'
import Settings from './Settings'

function Profile() {
  return (
    <div className='profile-container'>
      <div className="user-icon">
      <i class='bx bxs-user-circle' ></i>
      </div>
      <div className="user-info">
        <div className="user-selection-container">
          <NavLink to='/workout/profile/user' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"} }>User</NavLink>
          <NavLink to='/workout/profile/stats' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Stats</NavLink>
          <NavLink to='/workout/profile/settings' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Settings</NavLink>
          
          </div>
          <div className="variable-container">
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
          
        </div>
    </div>
  )
}

export default Profile
