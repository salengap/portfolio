// import { Container, Nav, Navbar } from "react-bootstrap"
// import { Link, NavLink } from "react-router"

// const Navigation = () => {
//   return (
//     <Navbar className="navbar" expand="lg">
//         <Container>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle"/>
//             <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
//               <Nav.Link as={NavLink} to="/about" className="navLink">About</Nav.Link>
//               <Link to={"https://www.sallyapelmo.com/"} target="_blank" className="navLink">
//                     Graphic Design
//                 </Link>
//                 <Link to={"https://www.instagram.com/sally___apelmo/"} target="_blank" className="navLink">
//                     Instagram
//                 </Link>
//             </Navbar.Collapse>
//         </Container>
//   </Navbar>
//   )
// }

// export default Navigation

// Navigation.tsx
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router";

interface NavigationProps {
  page: string;
}

const Navigation: React.FC<NavigationProps>= ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="navigationWrapper">
      {/* Hamburger / Toggle Button */}
      <button className="menuToggleBtn" onClick={toggleMenu}>
        ☰
      </button>

      {/* Nav menu (only shown if isOpen OR large screen via CSS) */}
      <Nav className={`verticalNavbar flex-column ${isOpen ? "show" : ""}`}>
        <Nav.Link as={NavLink} to={page === "homepage" ? "/about" : "/"} className="navLink">{page === "homepage" ? "About" : "Work"}</Nav.Link>
        <Nav.Link href="https://www.sallyapelmo.com/" target="_blank" className="navLink">Graphic Design</Nav.Link>
        <Nav.Link href="https://www.instagram.com/sally___apelmo/" target="_blank" className="navLink">Instagram</Nav.Link>
      </Nav>
    </div>
  );
};

export default Navigation;