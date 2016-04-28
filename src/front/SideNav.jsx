import React from 'react';
import {Link} from 'react-router';
import {Row, Col} from 'react-bootstrap';

let SideNav = ({sm, md}) => {
  return (
    <Col sm={sm} md={md}>
      <Row><Link to="person" >個人</Link></Row>
      <Row><Link to="group" >グループ</Link></Row>
      <Row><Link to="group" >って感じで、この辺がサイドナビ</Link></Row>
      <Row><Link to="person" >見た目の話は別で</Link></Row>
    </Col>
  );
};
export default SideNav;
