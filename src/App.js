import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/banner" component={Banner} />
      </Switch>
    </Router>
  );
};

export default App;
