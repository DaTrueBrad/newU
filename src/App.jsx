import { setNestedObjectValues } from 'formik';
import React, {useState, useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingComponents/LandingPage';
import Content from './components/WebComponents/Content';


function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  function setStatus() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="App">
      {/* <Spinner loading={loading}/> */}
      <Switch>
        <Route path="/dashboard">
          <Content isLoggedIn={setStatus} status={isLoggedIn}/>
        </Route>
        <Route path="/">
          {/* <LandingPage  isLoggedIn={isLoggedIn}/> */}
          {isLoggedIn ? <Redirect to='/dashboard/current' /> : <LandingPage isLoggedIn={setStatus}/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
