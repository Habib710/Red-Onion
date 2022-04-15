import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/logo2.png';
import './Header.css'


const Header = () => {
    return (
        
           <Navbar className='coustom-css' bg="light" expand="lg">
  <Container>
    <Link to="/">
        <img width='180px' src={img} alt="logo" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto d-flex align-items-center">
      
     
        <Link  className='nav-css' to='/login'> <FontAwesomeIcon className='nav-css' icon={ faShoppingCart} />Login</Link>
        <Link className='singup' to='/singup'> <button> Sing up </button></Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    );
};

export default Header;