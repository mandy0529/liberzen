import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';
const ControlRouter = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
};

export default ControlRouter;
