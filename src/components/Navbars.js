import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

import company from "./company.json";
// import "./App.css";

class Navbars extends Component {
  render() {
    // console.log(company)
    return (
      <div className='Navbar'>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/home'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/predict'>Predict</Nav.Link>
              <Nav.Link href='/logout'>Logout</Nav.Link>
              <Nav.Link href='s/create'>Create</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                {company.map((company, index) => (
                  <NavDropdown.Item key={index} href={"/" + company.name}>
                    {company.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
