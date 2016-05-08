import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="home">サイトのタイトル</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="アカウント" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>なにか</MenuItem>
          <MenuItem eventKey={3.2}>おくかな</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>ログアウト</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};
export default Header;
