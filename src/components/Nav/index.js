import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar (props) {
    const pages = [
        'About Me',
        'Resume',
        'Portfolio',
        'Contact'
    ]
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#about">MORGAN HANSEN</Navbar.Brand>
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

