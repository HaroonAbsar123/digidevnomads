import React, { useContext, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import logo from "../../Assets/logo.png";
import { MyContext } from "../../Context/MyContext";
import Icons from "../SocialIcons/Icons";

function Footer() {
  // };
  const {appointmentRef} = useContext(MyContext)
  let date = new Date();
  let year = date.getFullYear();

  const navigate = useNavigate();
  return (
    <section style={{ position: 'relative' }}>
    <Container fluid className="footer-section" id="home">
      <Container className="footer-content">
    <div className={classes.Footer}>
      <div className="footerImageText">LET'S TALK ABOUT PROJECT</div>
      <div className={classes.para} >At DigiDevNomads we specialize in designing, marketing, web development, mobile application development and email marketing.</div>
      <div style={{margin: '20px 10px'}}>
        <button onClick={() => {
                  window.location.hash = '#book-appointment';
                  appointmentRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }} className="buttonHome">LET'S TALK</button>
      </div>
      <div style={{marginTop: '40px'}} className={classes.para}>@2023 DigiDevNomads. All Rights Reserved</div>

      <div style={{flex: 1, maxWidth: '90%', margin: '30px auto', borderBottom: '1px solid #ccc', opacity: '0.5'}}>

      </div>


      <Row  style={{alignItems: 'center'}}>
        <Col md="4" className="footer-copywright">
          <div><img src={logo} height={"20px"} width="auto" alt="" />{" "} DigiDevNomads</div>
        </Col>
        <Col md="4" className="footer-copywright">
          <div>Copyright © {year}</div>
        </Col>
        <Col md="4" className="footer-body" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
              {/* <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a> */}
              <Icons />
        </Col>
      </Row>

    </div>


    
    </Container>
      </Container>
    </section>
  );
}

export default Footer;
