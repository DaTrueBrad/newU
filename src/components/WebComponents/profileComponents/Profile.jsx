import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import User from './User'
import Stats from './Stats'
import Settings from './Settings'
import Logout from './Logout'

function Profile() {
  return (
    <div className='profile-container'>
      <div className="user-icon">
        <i class='bx bxs-user-circle' ></i>
      </div>
      <div className="user-info">
        <h1 id="page-title">{localStorage.getItem('username')}</h1>
        <div className="user-selection-container">
          {/* <NavLink to='/dashboard/profile/user' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"} }>User</NavLink> */}
          <NavLink exact to='/dashboard/profile/' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Stats</NavLink>
          <NavLink to='/dashboard/profile/logout' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Log Out</NavLink>
          {/* <NavLink to='/dashboard/profile/settings' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Settings</NavLink> */}
          
          </div>
          <div className="variable-container">
            <Switch>
              <Route path='/dashboard/profile/logout'>
                <Logout />
              </Route>
              <Route path='/dashboard/profile/'>
                <Stats />
              </Route>
            </Switch>
          </div>
          
        </div>
    </div>
  )
}

export default Profile
