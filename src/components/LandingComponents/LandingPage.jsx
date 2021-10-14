import axios from 'axios'
import { useFormik,  } from 'formik'
import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import { Route, Switch } from 'react-router'
import About from './About'
import swal from 'sweetalert'
import SignUp from './SignUp'

// This page is the initial landing page for users if they are not a user, or not logged in.

// Formik registration functions
const initialValues = {
  username: '',
  password: '',
  passwordTwo: ''
}
const onSubmit = (values) => {
  if(values.password === values.passwordTwo) {
    const bodyObj = {
      username: values.username,
      password: values.password
    }
    axios.post('/users', bodyObj)
    .then((res) => alert("Success! Please log in.")) //We get the new user back to the front
  }
}
const validate = (values) => {
  const errors = {}
  if(!values.username) {
    errors.username = "Username Required"
  } else if(!/^[a-z0-9_-]{3,16}$/i.test(values.username)) {
    errors.username = "Must be between 3-16 characters, alphanumeric, and can include '-' or '_'."
  }
  if(!values.password) {
    errors.password = "Password Required"
  } else if(values.password != values.passwordTwo) {
    errors.password = "Passwords must match"
    errors.passwordTwo = "Passwords must match"
  }
  return errors
}

function LandingPage(props) {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  
  // these two functions allow the sign-up and login forms to be hidden or displayed.
  const showSignup = (e) => setSignUp(!signUp)
  const showLogin = (e) => setLogin(!login)

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  //Login Functions
  const loginChangeUser = (e) => setusername(e.target.value)
  const loginChangePass = (e) => setpassword(e.target.value)

  // This function will send the input data to the server, compare it with existing data, and if the user exists, allow them in. If there is an error, it will display the error in full.
  async function loginUser(e) {
    e.preventDefault()
    const bodyObj = {
      username: username,
      password: password,
    };
    return axios.post('/login', bodyObj)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data.id))
      localStorage.setItem('username', res.data.username)
      props.isLoggedIn()
    })
    .catch((err) => {
      swal(`Error`, `${err.response.data}`, 'warning')
    })
  }

  //todo clean up this page by transferring all of the content for login and sign-up to their respective components
  return (
    <div id='landing-page'>
      <img src="./whiteLogo.png" alt="" />
      <displaySignUp />
      <Switch>
        <Route exact path='/'>
          <div className="button-container">
            <div className="sign-up-button">
              <button onClick={showSignup}>Sign Up</button>
              {/* <SignUp /> */}
              <Collapse isOpened={signUp}>
                <div className="input-container">
                  <form onSubmit={formik.handleSubmit}>
                  <div className="form-control">
                        {formik.errors.username ? <div  className='error'>{formik.errors.username}</div> : null}
                      </div>
                    <input
                      type="text"
                      name='username'
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      placeholder='Username'/>
                      <div className="form-control">
                        {formik.errors.password ? <div  className='error'>{formik.errors.password}</div> : null}
                      </div>
                    <input
                      type="password"
                      name='password'
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder='Password' />
                      <div className="form-control">
                        {formik.errors.passwordTwo ? <div  className='error'>{formik.errors.passwordTwo}</div> : null}
                      </div>
                    <input
                      type="password"
                      name='passwordTwo'
                      onChange={formik.handleChange}
                      value={formik.values.passwordTwo}
                      placeholder='Re-enter Password'/>
                    <button type='submit' disabled={!formik.isValid}>Register</button>
                  </form>
                  
                </div>
              </Collapse>
             </div>
            <div className="login-button">
              <button onClick={showLogin}>Login</button>
              <Collapse isOpened={login}>
                <div className="input-container">
                  <form onSubmit={(e) => loginUser(e)}>
                    <input
                      type="text"
                      name='loginUsername'
                      placeholder="Username"
                      onChange={(e) => loginChangeUser(e)}/>
                    <input
                      type="password"
                      name='loginPassword'
                      placeholder="Password"
                      onChange={(e) => loginChangePass(e)} />
                    <button type='submit'>Login</button>
                  </form>
                </div>
              </Collapse>
            </div>
          </div>
        </Route>
      </Switch>
      <About />
    </div>
  )
}

export default LandingPage
