import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { MyContext } from "../Context/MyContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { serviceRef, contactUsRef } = useContext(MyContext);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // auth.signOut()

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
          className="d-flex"
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                HOME
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="#about-us"
                onClick={() => updateExpanded(false)}
              >
                 ABOUT US
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                
                to={
                  (location.pathname === "/book-appointment") ?
                  "/#our-services"
                  :
                  "#our-services"
                }
                onClick={() => {
                  updateExpanded(false);
                  if (location.pathname === "/book-appointment") {
                    navigate("/");
                    setTimeout(() => {
                      serviceRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }, 200);
                  } else {
                    serviceRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                OUR SERVICES
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="#portfolio"
                onClick={() => updateExpanded(false)}
              >
                
                PORTFOLIO
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={
                  (location.pathname === "/book-appointment") ?
                  "/#contact-us"
                  :
                  "#contact-us"
                }
                onClick={() => {
                  updateExpanded(false);
                  if (location.pathname === "/book-appointment") {
                    navigate("/");
                    setTimeout(() => {
                      contactUsRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }, 200);
                  } else {
                    contactUsRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                CONTACT US
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Nav.Link
                as={Link}
                className="fork-btn-inner"
                to="/book-appointment"
                onClick={() => updateExpanded(false)}
              >
                BOOK APPOINTMENT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
