import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { useFormik } from "formik";
import swal from "sweetalert";
import axios from "axios";

function SignUp(props) {
  const [signUp, setSignUp] = useState(false);
  const showSignup = (e) => setSignUp(!signUp);

  // This is all of our formik values, which will handle the signup of new users by handling the input data, all onchange functions, as well as performing an axios call when the user submits their info, automaticall loggin the user in.
  const initialValues = {
    username: "",
    password: "",
    passwordTwo: "",
  };
  const onSubmit = (values) => {
    if (values.password === values.passwordTwo) {
      const bodyObj = {
        username: values.username,
        password: values.password,
      };
      axios
        .post("/users", bodyObj)
        .then((res) => {
          localStorage.setItem("user", res.data[0][0].id);
          localStorage.setItem("username", res.data[0][0].username);
          props.isLoggedIn();
        })
        .catch((err) => swal("Oops!", err.response.data));
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    } else if (!/^[a-z0-9_-]{3,16}$/i.test(values.username)) {
      errors.username =
        "Must be between 3-16 characters, alphanumeric, and can include '-' or '_'.";
    }
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password != values.passwordTwo) {
      errors.password = "Passwords must match";
      errors.passwordTwo = "Passwords must match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="sign-up-button">
      <button onClick={showSignup}>Sign Up</button>
      <Collapse isOpened={signUp}>
        <div className="input-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              {formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}
            </div>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Username"
            />
            <div className="form-control">
              {formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            <div className="form-control">
              {formik.errors.passwordTwo ? (
                <div className="error">{formik.errors.passwordTwo}</div>
              ) : null}
            </div>
            <input
              type="password"
              name="passwordTwo"
              onChange={formik.handleChange}
              value={formik.values.passwordTwo}
              placeholder="Re-enter Password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Register
            </button>
          </form>
        </div>
      </Collapse>
    </div>
  );
}

export default SignUp;
