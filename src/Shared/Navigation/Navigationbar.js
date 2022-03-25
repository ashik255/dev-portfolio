import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './NavigationBar.css'
const Navigationbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"> <span className="headline display-6">Ariful Ashik</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className=''>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#portfolio">PortFolio</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Navigationbar;