import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar (props) {
    const pages = [
        'About',
        'Resume',
        'Portfolio',
        'Contact'
    ]
    return (
        <Navbar bg="light" variant="dark" collapseOnSelect>
            <Navbar.Brand href="#about" className = "text-info font-weight-bold">MORGAN HANSEN</Navbar.Brand>
            <Nav className="ml-auto">
                {pages.map(page => (
                    <li className="nav-item" key={page}>
                    <Nav.Link 
                        className = "text-info"
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
