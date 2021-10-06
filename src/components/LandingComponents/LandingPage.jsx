import axios from 'axios'
import { useFormik } from 'formik'
import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import { Route, Switch, Redirect } from 'react-router'
import About from './About'

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
  } else {
    console.log('cannot submit, msut match')
  }
}

const validate = (values) => {
  if(values.password === values.passwordTwo) {
    console.log('they match!')
  } else {
    console.log('no matchie')
  }
}

function LandingPage(props) {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  
  
  function showSignup(e) {
    setSignUp(!signUp)
  }
  function showLogin(e) {
    setLogin(!login)
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  //Login Functions
  function loginChangeUser(e) {
    setusername(e.target.value)
  }
  function loginChangePass(e) {
    setpassword(e.target.value)
  }

  async function loginUser(e) {
    e.preventDefault()
    console.log('form value:', e.target.value)
    const bodyObj = {
      username: username,
      password: password,
    };
    console.log(bodyObj)
    return axios.post('/login', bodyObj)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data))
      props.isLoggedIn()
    })
  }
  return (
    <div id='landing-page'>
      {/* //TODO Put this JSX into a seperate component so it doesn't reload each time you push a button. Oissibly use state and use the buttons tio change the state, then use if statements to select what is loaded onto the page. */}
      <img src="./landscape.png" alt="" />
      
      <displaySignUp />
      <Switch>
        <Route exact path='/'>
          <div className="button-container">
            <div className="sign-up-button">
              <button onClick={showSignup}>Sign Up</button>
              <Collapse isOpened={signUp}>
                <div className="input-container">
                  <form onSubmit={formik.handleSubmit}>
                    <input
                      type="text"
                      name='username'
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      placeholder='Username'/>
                    <input
                      type="password"
                      name='password'
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder='Password' />
                    <input
                      type="password"
                      name='passwordTwo'
                      onChange={formik.handleChange}
                      value={formik.values.passwordTwo}
                      placeholder='Re-enter Password'/>
                    <button type='submit'>Register</button>
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
                      type="text"
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
