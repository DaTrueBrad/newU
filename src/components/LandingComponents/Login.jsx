import React, { useState } from "react";
import axios from "axios";
import { Collapse } from "react-collapse";
import swal from "sweetalert";

function Login(props) {
  const [login, setLogin] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const showLogin = (e) => setLogin(!login);

  const loginChangeUser = (e) => setusername(e.target.value);
  const loginChangePass = (e) => setpassword(e.target.value);

  // This function takes in the user input-data (via state change, figured we would try both in this application), and then compares the user data the user puts in with the info on the backend. If it matches, user is logged in.
  async function loginUser(e) {
    e.preventDefault();
    const bodyObj = {
      username: username,
      password: password,
    };
    return axios
      .post("/login", bodyObj)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.id));
        localStorage.setItem("username", res.data.username);
        props.isLoggedIn();
      })
      .catch((err) => {
        swal(`Error`, `${err.response.data}`, "warning");
      });
  }

  return (
    <div className="login-button">
      <button onClick={showLogin}>Login</button>
      <Collapse isOpened={login}>
        <div className="input-container">
          <form onSubmit={(e) => loginUser(e)}>
            <input
              type="text"
              name="loginUsername"
              placeholder="Username"
              onChange={(e) => loginChangeUser(e)}
            />
            <input
              type="password"
              name="loginPassword"
              placeholder="Password"
              onChange={(e) => loginChangePass(e)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </Collapse>
    </div>
  );
}

export default Login;
