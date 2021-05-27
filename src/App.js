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
import Checkout from './components/Checkout/Checkout';
import LoginSignUp from './components/LoginSignup/LoginSignup';
import PrivateRoute from './lib/PrivateRoute';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#059033',
      },
    },
    typography: {
      // fontFamily:'',
      // h2: {
      //   fontWeight: 600,
      // },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '*::-webkit-scrollbar': {
            width: '12px !important'
          },
          '*::-webkit-scrollbar-track': {
            background: 'orange !important'
          },
          '*::-webkit-scrollbar-thumb': {
            background: 'blue',
            borderRadius: 20,
            border: '3px solid orange'
          }
        },
      },
    },

  });
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route exact path="/checkout" component={Checkout} /> */}
            <Route exact path="/login" component={LoginSignUp} />
            <Route exact path="/signup" component={LoginSignUp} />
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          </Switch>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
};
export default App;
