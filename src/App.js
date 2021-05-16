import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Shop from "./components/Shop/Shop";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Banner />
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
