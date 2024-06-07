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

  const { serviceRef, contactUsRef, appointmentRef, portfolioRef } =
    useContext(MyContext);

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
            window.scrollTo(0, 0);
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
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                HOME
              </Nav.Link>
            </Nav.Item> */}

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
                to={"#services"}
                onClick={() => {
                  updateExpanded(false);
                  serviceRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                SERVICES
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#our-work"
                onClick={() => {
                  updateExpanded(false);
                  portfolioRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                OUR WORK
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={"#contact-us"}
                onClick={() => {
                  updateExpanded(false);
                  contactUsRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                CONTACT US
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <button
                as={Link}
                className="buttonHome"
                style={{
                  marginTop: '0px',
                  padding: "0px 10px",
                  maxHeight: "30px",
                  height: "max-content",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flex: 1,
                  alignSelf: 'center',
                  width: '100%',
                  color: "#fff"
                }}
                onClick={() => {
                  updateExpanded(false);
                  window.location.hash = "#book-appointment";
                  appointmentRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                BOOK A CALL
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
