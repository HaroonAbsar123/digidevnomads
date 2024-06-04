import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from './Banner.module.css';
import homeImageMain from '../../Assets/homeImageMain.png'
function Banner() {
  const navigate = useNavigate();

  return (
    <section style={{ position: 'relative' }}>
      <Container fluid className="services-section" id="home">
        <Container className="services-content">
          <div className={classes.textContainer}>
              
            <div className={classes.middleText}>
            BOOK APPOINTMENT
            </div>
            {/* <div className={classes.upperText}>
              OUR SERVICES
            </div>
            <button className="buttonHome">ABOUT US</button> */}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Banner;
