import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";

export default class Navi extends Component {
  showNavi() {
    return (
      <MDBNavbar color="black" fixed="top" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <strong>Which Mobile</strong>
          </MDBNavbarBrand>

          <MDBCollapse navbar>
            <MDBNavbarNav left>
              <MDBNavItem href="/" active>
                <MDBNavLink >Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem href="/phones">
                <MDBNavLink >Phones</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem href="/howto">
                <MDBNavLink >How to Use</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem href="/about">
                <MDBNavLink >About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }

  initialNavi() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Which Mobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/phones">Phones</Nav.Link>
            <Nav.Link href="/howto">How To Use</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }

  render() {
    return <div>{this.initialNavi()}</div>;
  }
}
