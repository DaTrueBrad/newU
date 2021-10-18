import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import About from "./About";
import SignUp from "./SignUp";
import Login from "./Login";

function LandingPage(props) {
  return (
    <div id="landing-page">
      <img src="./whiteLogo.png" alt="" />
      <div className="button-container">
        <SignUp isLoggedIn={props.isLoggedIn} />
        <Login isLoggedIn={props.isLoggedIn} />
      </div>
      <About />
    </div>
  );
}

export default LandingPage;
