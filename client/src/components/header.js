import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let id = localStorage.getItem("userId");
    if (id) {
      let name = localStorage.getItem("username");
      setUserName(name);
    }
  }, []);

  const signout = () => {
    localStorage.clear();
    setUserName("");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{ fontStyle: "italic" }} href="/">
          RepairMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Team</Nav.Link>
            <Nav.Link href="/services">All Services</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            {userName ? (
              <NavDropdown
                title={`Welcome, ${userName}`}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={signout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button
                size="md"
                variant="outline-light"
                onClick={() => (window.location.href = "/auth")}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
