import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Banner />
      <About />
      <Shop />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Switch></Switch>
    </Router>
  );
};

export default App;
