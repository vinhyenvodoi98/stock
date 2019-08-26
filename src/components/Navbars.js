import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

class Navbars extends Component {
  render() {
    return (
      <div className='Navbar'>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/predict'>Predict</Nav.Link>
              <Nav.Link href='/create'>Create Your Model</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
