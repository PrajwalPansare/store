import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar() {
  return (
    <div className='mb-12'>
    <Navbar className=" fixed-top h-16 px-40 bg-yellow-500 ">
      <Container className="flex justify-between items-center">
        <Navbar.Brand as={Link} to="/" className="mr-auto text-red-700 font-extrabold size-auto">SNACK's STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow">
          <Nav className="mx-5 flex space-x-6 font-semibold">
            <Nav.Link as={Link} to="/" className=' hover:underline' >Home</Nav.Link>
            <Nav.Link as={Link} to="/Catagori" className=' hover:underline'>Catagori</Nav.Link>
            <Nav.Link as={Link} to="/Heading" className=' hover:underline'>Heading</Nav.Link>
            <Nav.Link as={Link} to="/Heading" className=' hover:underline'>About</Nav.Link>
          </Nav>
          <Nav className="ml-auto flex space-x-4">
            <Nav.Link as={Link} to="/deets">Login / Sing-up</Nav.Link>
            <Nav.Link as={Link} to="/memes"><i class="bi bi-cart2"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
