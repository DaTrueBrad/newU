import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingComponents/LandingPage';
import Spinner from './components/Spinner';
import Content from './components/WebComponents/Content';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  return (
    <div className="App">
      {/* <Spinner loading={loading}/> */}
      <Switch>
        <Route path="/workout">
          <Content />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
