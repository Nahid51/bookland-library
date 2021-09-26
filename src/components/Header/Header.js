import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (

        <div>
            <Navbar bg="secondary" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">BookLand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action1">Shop</Nav.Link>
                            <Nav.Link href="#action1">Contact</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='rounded text-center m-5 py-3 header'>
                <h3 className='fw-bold'>Collect Books from My<span className='budge'> BookLand Library</span></h3>
                <p>Create your own library and make yourself interested in reading books.</p>
                <h5 className='fw-bold budge'>Budge for Library: &#2547; 4000</h5>
            </div>
        </div>
    );
};

export default Header;