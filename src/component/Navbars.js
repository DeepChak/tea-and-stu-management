import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Navbars() {
    let navigate = useNavigate()
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>Student & Teacher Managemnet</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={()=> navigate('./home')}>Home</Nav.Link>
                        <Nav.Link onClick={()=>navigate('./dashboard')}>Dashboard</Nav.Link>
                        <NavDropdown title="Manage" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={()=>navigate('./student-list')}>Student List</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>navigate('./teacher-list')}>Teacher List</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

    export default Navbars