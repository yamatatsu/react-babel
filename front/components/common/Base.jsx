import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from 'common/Header.jsx';
import SideNav from 'common/SideNav.jsx';

/**
 * [画面の全容]
 * @param  {[jsx]} {children} [子Routeのcomponentが入ってる]
 * @return {[jsx]}            [jsx]
 */
const Base = ({children}) => {
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
export default Base;
