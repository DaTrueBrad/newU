import React from 'react'
import {NavLink} from 'react-router-dom'

function Favorites() {
  return (
    <div>
      <h1>Favorites</h1>
      <div className="favorites-selection">
      <NavLink to='/workout/favorites/programs' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"} }>Programs</NavLink>
          <NavLink to='/workout/favorites/articles' activeStyle={{backgroundColor: '#FFA620', color: "#3C3C3C", boxShadow: "0px 3px 10px rgba(0,0,0,0.5"}}>Articles</NavLink>
      </div>
      <div className="favorites-container">
        <h2>This is where content will go.</h2>
      </div>
    </div>
  )
}

export default Favorites
