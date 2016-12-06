/**
 *
 * NavBar
 *
 */

import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Blog </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={2}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/posts/new">Add new post</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
