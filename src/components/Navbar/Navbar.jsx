import React from 'react';
import './Navbar.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faBalanceScale} />

        <span className="ml-3">¿En realidad es una oferta?</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav.Link className="justify-content-start text-white" href="#about">Sobre el proyecto</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;