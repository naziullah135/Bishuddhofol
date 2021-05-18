<<<<<<< HEAD
import React from 'react';
import Navigation from './components/Shared/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import { ContextProvider } from './context';
import Cart from './components/Cart/Cart';
=======
import React from "react";
import Navigation from "./components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { ContextProvider } from "./context";
import Cart from "./components/Cart/Cart";
>>>>>>> 43649fba02f12146574225d7166289f623898589
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </ContextProvider>
  );
};
export default App;
