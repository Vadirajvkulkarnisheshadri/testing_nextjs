"use client"

import React from 'react'
import { Container } from 'react-bootstrap';
import {NavLink,Navbar,Nav,NavDropdown,Form,Button   } from 'react-bootstrap';
import "../page.module.css"


const Header = () => {
  return (
    <>
    
<Navbar fixed="top"  bg="dark" data-bs-theme="dark" >
      <Container fluid className="">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About </NavLink>
            <NavLink href="/blog">Blog  </NavLink>
            <NavLink href="/admission">Admission </NavLink>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">online</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                 Motor Vehicle 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Lite Motor Vehicle
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              heavy  Motor Vehicle
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Big Truck/CARGO
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavLink href="#" disabled>
              Link
            </NavLink> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
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

    </>
  );
}

export default Header