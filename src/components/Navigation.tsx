import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router"

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" id="navbarTitle">Sally Apelmo</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle"/>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav.Link as={NavLink} to="/about" className="navLink">About</Nav.Link>
            </Navbar.Collapse>
        </Container>
  </Navbar>
  )
}

export default Navigation