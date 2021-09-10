import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import Navbar from './Navbar';
const ControlRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
};

export default ControlRouter;
