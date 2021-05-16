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
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}
export default App;