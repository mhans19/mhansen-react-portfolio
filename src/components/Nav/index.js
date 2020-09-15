import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar (props) {
    const pages = [
        'Home',
        'About',
        'Education',
        'Experience',
        'Projects',
        'Contact'
    ]
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">MORGAN HANSEN</Navbar.Brand>
            <Nav className="ml-auto">
                {pages.map(page => (
                        <li className="nav-item" key={page}>
                        <Nav.Link 
                            href={'#' + page.toLowerCase()}
                            onClick={() => props.handlePageChange(page)}
                        >
                            {page}
                        </Nav.Link >
                        </li>
                ))}
            </Nav>
        </Navbar>
    );
}
  
export default NavigationBar;

