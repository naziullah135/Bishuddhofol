import React from 'react';
import Navigation from './components/Shared/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
