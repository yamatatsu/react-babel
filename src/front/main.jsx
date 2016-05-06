import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Base from 'Base.jsx';
import Home from 'Home.jsx';
import Person from 'Person.jsx';
import Group from 'Group.jsx';

/**
 * [react-routerなrouter]
 */
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <Route path="home" component={Home} />
      <Route path="person" component={Person} />
      <Route path="group" component={Group} />
    </Route>
  </Router>
);

render(router, document.getElementById('react-root'));
