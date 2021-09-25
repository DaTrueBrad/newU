import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingComponents/LandingPage';
import Content from './components/WebComponents/Content';


function App() {
  return (
    <div className="App">
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
