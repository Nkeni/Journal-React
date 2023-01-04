
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.scss"



function Header() {
  return (
  
       <Navbar bg="light" expand="lg" >
<Container>
<Navbar.Brand as={Link} to="/">AG</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="me-auto">
<Nav.Link as={Link} to="/home">Home</Nav.Link>
<Nav.Link as={Link} to="/journal">Journal</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
    
  )
}

export default Header
