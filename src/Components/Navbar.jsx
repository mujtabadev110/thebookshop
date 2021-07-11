import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { Nav , Button, Navbar, NavDropdown, Badge} from "react-bootstrap";




const NavbarItem = () =>{
    return(

        <>


      {/* <Col sm={4} md={4}>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="" />
      <Button variant="outline-success">Search</Button>
    </Form>
      </Col> */}
        
        
  <Navbar bg="white" varient="dark" expand="md" stickey="top" className="navbar-wrapper">
        
  <Navbar.Brand  className="nav-logo">  <Nav.Link>  <NavLink to="home" > <span style={{ fontSize: "2.3rem" }}>The Book Shop</span > </NavLink> </Nav.Link></Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="justify-content-end mt-2 navlinks" style={{ width: "100%" }} >
      <Nav.Link> <NavLink to="/home" ><span>Home</span></NavLink> </Nav.Link>
      <Nav.Link> <NavLink to="/about" ><span>About</span></NavLink> </Nav.Link>


      <NavDropdown title={<span>Catagories</span>} >
        <NavDropdown.Item ><NavLink to="/english"> English </NavLink> </NavDropdown.Item>
        <NavDropdown.Item ><NavLink to="/maths"> Mathematics </NavLink> </NavDropdown.Item>
        <NavDropdown.Item ><NavLink to="/programming"> Programming </NavLink> </NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item ><NavLink to="/products"> View All </NavLink> </NavDropdown.Item>
      </NavDropdown>

      <Nav.Link> <NavLink to="contact"><span>Contact Us</span></NavLink> </Nav.Link>

       <NavLink to="/cart"> <Button variant="white" className="btn btn-space me-3 ms-2"> <FontAwesomeIcon icon={faCartPlus} /><Badge variant="danger">0</Badge> </Button></NavLink> &nbsp;
      <NavLink to="signin"> <Button variant="success" className="signin-btn" >Sign in</Button></NavLink>
       
      </Nav>

      </Navbar.Collapse>

          </Navbar>

        </>
    )
}

export default NavbarItem;
