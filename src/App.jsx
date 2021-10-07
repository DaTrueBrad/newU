import React, {useState, useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingComponents/LandingPage';
import Content from './components/WebComponents/Content';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  function setStatus() {
    setIsLoggedIn(!isLoggedIn)
  }
  useEffect(() => {
    if(localStorage.getItem('user')) {
      setIsLoggedIn(true)
    }
  }, [])
  

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
