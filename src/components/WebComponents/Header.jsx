import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

// The header is the navigation bar for desktop devices.


function Header(props) {
  const [isActive, setActive] = useState("true");
  const menuClick = () => setActive(!isActive)

  function logout() {
    setActive(!isActive)
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    props.isLoggedIn()
  }

  return (
    <div>
      <header>
        <img src="../../whiteLogo.png" alt="" />
        <i className='bx bx-menu' onClick={() => menuClick()} ></i>
        <nav className="nav-menu" id={`${isActive ? "hidden" : ""}`}>
          <h2 id="page-title">Welcome,<br></br> {localStorage.getItem("username")}</h2>
          <NavLink
            to='/dashboard/programs/'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Programs</NavLink>
          <NavLink
            to='/dashboard/build'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Build Workout</NavLink>
          <NavLink
            to='/dashboard/articles'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Articles</NavLink>
          <NavLink
            to='/dashboard/favorites/'
            activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5)"}}
            onClick={menuClick}>Favorites</NavLink>
          <NavLink
            to='/dashboard/profile/'
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
