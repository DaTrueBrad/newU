import React from "react";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import FavArticles from "./FavArticles";
import FavWorkouts from "./FavWorkouts";

// This component is essentially a router for the other two components.

function Favorites() {
  return (
    <div>
      <h1 id="page-title">Favorites</h1>
      <div className="user-selection-container">
        <NavLink
          exact
          to="/dashboard/favorites/"
          activeStyle={{
            backgroundColor: "#FFA620",
            color: "#3C3C3C",
            boxShadow: "0px 3px 10px rgba(0,0,0,0.5",
          }}
        >
          Programs
        </NavLink>
        <NavLink
          to="/dashboard/favorites/articles"
          activeStyle={{
            backgroundColor: "#FFA620",
            color: "#3C3C3C",
            boxShadow: "0px 3px 10px rgba(0,0,0,0.5",
          }}
        >
          Articles
        </NavLink>
      </div>
      <div className="variable-container">
        <Switch>
          <Route path="/dashboard/favorites/articles">
            <FavArticles />
          </Route>
          <Route path="/dashboard/favorites/">
            <FavWorkouts />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Favorites;
