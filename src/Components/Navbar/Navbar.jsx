import React from 'react'
import './Navbar.css'
import me from '../Assets/me.png'
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


const Navbarr = () => {
    return (

        <Navbar expand="lg" variant="dark" fixed="top">
            <div className="container flex-lg-column">
                <Navbar.Brand href="#">
                    <span className="h3 fw-bold d-block d-lg-none">Tanigh Clark</span>
                    <img src={me} className="d-none d-lg-block rounded-circle" alt="Me" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto flex-lg-column text-lg-center">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Pages/Portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/Pages/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/Pages/Contact">Contact</Nav.Link>
                        <Dropdown>
                            <a href="https://www.linkedin.com/in/tanigh-clark" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i></a>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navbarr