import React from "react";
import {NavLink} from "react-router-dom";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { Nav , Button, Navbar, NavDropdown} from "react-bootstrap";




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

       <NavLink to="#"> <Button variant="danger" className = "cart-btn" >Cart</Button></NavLink> &nbsp;
      <NavLink to="signin"> <Button variant="success" className="signin-btn" >Sign in</Button></NavLink>
       
      </Nav>

      </Navbar.Collapse>

          </Navbar>


  

      {/* <NavDropdown id="dropdowntitle" title="Catagories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">English Literature</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mathematics</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Programming</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
      </NavDropdown> */}





      {/* {/* <form className="d-flex">
      <button className="btn btn-space me-3 ms-2"> <FontAwesomeIcon icon={faCartPlus} /> </button>
        <button className = "btn btn-outline-success" type="submit">SignUp</button>
        
      </form>
      

    </div>
  </div>

    {/* <div className="row navbarwrapper">
        <div className="col-12  mb-1 mt-1">


<nav className="navbar nav navbar-expand-lg navbar-light" >
  <div className="container-fluid">

  <NavLink className="navbar-brand" to="#">The Book Shop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   

    <div className="collapse navbar-collapse " id="navbarSupportedContent" >

      <ul className="navbar-nav me-auto mb-2 mb-lg-2">

        <li className="nav-item nav justify-content-center">
          <NavLink activeClassName="menu-active" className="nav-link" aria-current="page" to="/home"><span>Home</span></NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu-active"  className="nav-link" to="/about"><span>About</span></NavLink>
        </li>

        {/*---------------DropDown Menu Start--------------- */}

        {/* <li className="nav-item dropdown">
          <NavLink activeClassName="menu-active" className="nav-link dropdown-toggle" to="/catagories" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span>Catagories</span>
          </NavLink>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">View All</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="#">Mathmetics</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">English Literature</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Programming</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Urdu Literature</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Science</NavLink></li>
          </ul>
        </li>

        {/*---------------DropDown Menu ends--------------- */}

        {/* <li className="nav-item">
          <NavLink  activeClassName="menu-active" className="nav-link " to="/Contact" tabindex="-1" aria-disabled="true"><span>Contact Us</span></NavLink>
        </li>
      </ul> */}





      {/* {/* <form className="d-flex">
      <button className="btn btn-space me-3 ms-2"> <FontAwesomeIcon icon={faCartPlus} /> </button>
        <button className = "btn btn-outline-success" type="submit">SignUp</button>
        
      </form>
      

    </div>
  </div>
</nav>


</div>
</div>  */}




        </>
    )
}

export default NavbarItem;
