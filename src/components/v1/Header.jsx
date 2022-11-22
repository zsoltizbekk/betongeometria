import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {



    return(
        <div className="header">
        <Navbar collapseOnSelect expand="sm" fixed="top">
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/epitesz">Építésztervezés</Nav.Link>
                    <NavDropdown title="Betontermékek" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bútorok</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Falburkolatok</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Kültéri elemek</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    </NavDropdown>
                </Nav>
                {/* <Nav>
                    
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        
        
        // <div className="header">
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        //     <Container>
        //         <Navbar.Brand href="/">LOGO</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="me-auto navigation-right">
        //             <Nav.Link href="/epitesz">Építésztervezés</Nav.Link>
        //             <NavDropdown title="Betontermékek" id="collasible-nav-dropdown">
        //             <NavDropdown.Item href="#action/3.1">Bútorok</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.2">Falburkolatok</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.3">Kültéri elemek</NavDropdown.Item>
        //             {/* <NavDropdown.Divider /> */}
        //             </NavDropdown>
        //         </Nav>
        //         {/* <Nav>
                    
        //             <Nav.Link href="#deets">More deets</Nav.Link>
        //             <Nav.Link eventKey={2} href="#memes">
        //             Dank memes
        //             </Nav.Link>
        //         </Nav> */}
        //         </Navbar.Collapse>
        //     </Container>
        //     </Navbar>
        // </div>

    );
}

export default Header;