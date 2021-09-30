import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingComponents/LandingPage';
import Content from './components/WebComponents/Content';

const Context = React.createContext(true)


function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  return (
    <div className="App">
      {/* <Spinner loading={loading}/> */}
      <Switch>
        <Route path="/workout">
          <Content isLoggedIn={isLoggedIn}/>
        </Route>
        <Route path="/">
          <LandingPage  isLoggedIn={isLoggedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
