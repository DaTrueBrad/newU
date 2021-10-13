import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


function Header(props) {
  const [isActive, setActive] = useState("false");

  function menuClick() {
    setActive(!isActive)
  }

  function logout() {
    setActive(!isActive)
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    props.isLoggedIn()
  }

  return (
    <div>
      <header>
        <img src="../../logo.png" alt="" />
        <i className='bx bx-menu' onClick={() => menuClick()} style={{color: `${isActive ? "" : "#FFA620"}`}}></i>
        <nav className="nav-menu" id={`${isActive ? "hidden" : ""}`}>
          <h2 id="page-title">Welcome, {localStorage.getItem("username")}</h2>
          <NavLink
            to='/dashboard/current'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Current Program</NavLink>
          <NavLink
            to='/dashboard/build'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Build Workout</NavLink>
          <NavLink
            to='/dashboard/articles'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Articles</NavLink>
          <NavLink
            to='/dashboard/programs/custom'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Programs</NavLink>
          <NavLink
            to='/dashboard/favorites/programs'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Favorites</NavLink>
          <NavLink
            to='/dashboard/profile/stats'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Profile</NavLink>
          <NavLink
            to='/' onClick={logout}>Log Out</NavLink>
      </nav>
      </header>
    </div>
  )
}

export default Header
