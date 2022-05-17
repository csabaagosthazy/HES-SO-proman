import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ProMan</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/search">Search methods</Nav.Link>
          <Nav.Link href="/create">Create methods</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
