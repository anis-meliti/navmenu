import React from 'react';
// ********* style import********

import './styles/style.css'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

const navmenu = ({ dropDown, isActive, name, link }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    {(dropDown) ? <NavDropdown title={name} id="collasible-nav-dropdown">
                        {dropDown.map(el => <NavDropdown.Item href={el.sublink}> {el.subname} </NavDropdown.Item>)}
                    </NavDropdown> : <Nav.Link href={isActive && link}>{name}</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default navmenu;