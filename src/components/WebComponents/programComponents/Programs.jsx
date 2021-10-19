import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import Current from '../currentComponents/Current'
import Custom from './Custom'
import Templates from './Templates'

// This page is acting as a router for the other pages.

function Programs() {
  return (
    <div>
      <h1 id='page-title'>Programs</h1>
      <div className="user-selection-container">
        <NavLink exact to='/dashboard/programs/' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Current</NavLink>
        <NavLink to='/dashboard/programs/custom' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"} }>Custom</NavLink>
        <NavLink to='/dashboard/programs/templates' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Templates</NavLink>

      </div>
      <Switch>
        <Route path='/dashboard/programs/custom'>
          <Custom />
        </Route>
        <Route path='/dashboard/programs/templates'>
          <Templates />
        </Route>
        <Route path='/dashboard/programs/'>
          <Current />
        </Route>
      </Switch>
    </div>
  )
}

export default Programs
