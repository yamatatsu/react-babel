import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {Row, Col} from 'react-bootstrap';

const SideNav = ({sm, md}) => {
  return (
    <Col sm={sm} md={md}>
      <Row><Link to="home" >Home</Link></Row>
      <Row><Link to="person" >個人</Link></Row>
      <Row><Link to="group" >グループ</Link></Row>
      <Row><Link to="person" >って感じで、この辺がサイドナビ</Link></Row>
      <Row><Link to="group" >見た目の話は別で</Link></Row>
    </Col>
  );
};

SideNav.propTypes = {
  sm: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
};

export default SideNav;
