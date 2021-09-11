import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ControlBrand from './Brand/ControlBrand';
import Shop from './Shop';
import Home from './Home';
import ControlNavbar from './Navbar/ControlNavbar';
import Info from './Info';

const ControlRouter = () => {
  return (
    <Router>
      <ControlNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/brand" component={ControlBrand} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <Info />
    </Router>
  );
};

export default ControlRouter;
