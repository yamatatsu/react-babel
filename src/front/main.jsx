import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header.jsx';
import SideNav from './SideNav.jsx';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="person" >個人</Link></li>
        <li><Link to="group" >グループ</Link></li>
      </ul>
    </div>
  );
}

const Person = () => {
  return (
    <div>
      <h2>個人</h2>
      <ul>
        <li><Link to="home">Home</Link></li>
      </ul>
    </div>
  );
}

const Group = () => {
  return (
    <div>
      <h2>グループ</h2>
      <ul>
        <li><Link to="home">Home</Link></li>
      </ul>
    </div>
  );
}

/**
 * [画面の全容]
 * @param  {[jsx]} {children} [子Routeのcomponentが入ってる]
 * @return {[jsx]}            [jsx]
 */
const App = ({children}) => {
  return (
    <div>
      <Header/>
      <Grid fluid>
        <Row>
          <SideNav sm={3} md={3} />
          <Col sm={9} md={9}>
            {children}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

/**
 * [react-routerなrouter]
 */
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="person" component={Person} />
      <Route path="group" component={Group} />
    </Route>
  </Router>
);

render(router, document.getElementById('react-root'));
