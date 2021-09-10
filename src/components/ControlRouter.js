import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Brand from './Brand';
import Shop from './Shop';
import Home from './Home';
import Navbar from './Navbar';
import Info from './Info';

const ControlRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/brand" component={Brand} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <Info />
    </Router>
  );
};

export default ControlRouter;
