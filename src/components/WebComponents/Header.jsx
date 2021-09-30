import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


function Header(props) {
  const [isActive, setActive] = useState("false");

  function menuClick() {
    setActive(!isActive)
  }

  function logout() {
    props.isLoggedIn()
  }

  return (
    <div>
      <header>
        <img src="../../logo.png" alt="" />
        <i className='bx bx-menu' onClick={() => menuClick()} style={{color: `${isActive ? "" : "#FFA620"}`}}></i>
        <nav className="nav-menu" id={`${isActive ? "hidden" : ""}`}>
          <NavLink to='/workout/current' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}} onClick={menuClick}>Current Program</NavLink>
          <NavLink to='/workout/build' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}} onClick={menuClick}>Build Workout</NavLink>
          <NavLink to='/workout/articles' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}} onClick={menuClick}>Articles</NavLink>
          <NavLink to='/workout/favorites' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}} onClick={menuClick}>Favorites</NavLink>
          <NavLink to='/workout/profile/user' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C"}} onClick={menuClick}>Profile</NavLink>
          <NavLink to='/' onClick={menuClick, logout}>Log Out</NavLink>
      </nav>
      </header>
    </div>
  )
}

export default Header
