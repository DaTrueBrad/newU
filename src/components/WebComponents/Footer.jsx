import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <NavLink
      to="/dashboard/programs/current"
      activeStyle={{backgroundColor: '#FFA620', color: "#3c3c3c", boxShadow: "0px 3px 10px rgba(0,0,0,0.8)"}}>
        <i class='bx bxs-calendar-event'></i>
      </NavLink>
      <NavLink
      to="/dashboard/articles"
      activeStyle={{backgroundColor: '#FFA620', color: "#3c3c3c", boxShadow: "0px 3px 10px rgba(0,0,0,0.8)"}}>
        <i class='bx bxs-book-bookmark' ></i>
      </NavLink>
      <NavLink
      to="/dashboard/build"
      activeStyle={{backgroundColor: '#FFA620', color: "#3c3c3c", boxShadow: "0px 3px 10px rgba(0,0,0,0.8)"}}>
        <i class='bx bxs-plus-circle' ></i>
      </NavLink>
      <NavLink
      to="/dashboard/favorites/programs"
      activeStyle={{backgroundColor: '#FFA620', color: "#3c3c3c", boxShadow: "0px 3px 10px rgba(0,0,0,0.8)"}}>
        <i class='bx bxs-star' ></i>
      </NavLink>
      <NavLink
      to="/dashboard/profile/stats"
      activeStyle={{backgroundColor: '#FFA620', color: "#3c3c3c", boxShadow: "0px 3px 10px rgba(0,0,0,0.8)"}}>
        <i class='bx bxs-user'></i>
      </NavLink>

      
    </footer>
  )
}

export default Footer
