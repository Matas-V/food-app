import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.js';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Meal from './components/Meal/Meal';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/:id" component={Meal} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
