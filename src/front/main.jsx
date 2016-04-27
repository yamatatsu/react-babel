import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import {} from 'lodash';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/person" >個人</Link></li>
          <li><Link to="/group" >グループ</Link></li>
        </ul>
      </div>
    );
  }
}

class Person extends React.Component {
  render() {
    return (
      <div>
        <h2>個人</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}

class Group extends React.Component {
  render() {
    return (
      <div>
        <h2>グループ</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}

let router = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/person" component={Person} />
    <Route path="/group" component={Group} />
  </Router>
);

React.render(router, document.getElementById('react-root'));
