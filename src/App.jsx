import React, {useState, useEffect} from 'react'
import { Route, Switch, PrivateRoute } from 'react-router';
import './App.css';
import LandingPage from './components/LandingComponents/LandingPage';
import Content from './components/WebComponents/Content';

const Context = React.createContext(false)


function App() {
  const [loading, setLoading] = useState(true);
  <Context.Provider value="false">

  </Context.Provider>

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  return (
    <div className="App">
      {/* <Spinner loading={loading}/> */}
      <Switch>
        <PrivateRoute path="/workout">
          <Content />
        </PrivateRoute>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
