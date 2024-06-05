import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from './Banner.module.css';
import homeImageMain from '../../Assets/homeImageMain.png'
import HoverImage from "./HoverImage";
function Banner() {
  const navigate = useNavigate();

  return (
    <section style={{ position: 'relative' }}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" style={{paddingTop: '6rem'}}>
          <div className={classes.textContainer}>
            <div>
            <div className={classes.upperText}>
              BUILD DIGITAL BRAND WITH EXPERTS
            </div>
            <div className={classes.middleText}>
              DEVELOP THE DIGITAL UNIVERSE
            </div>
            <button className="buttonHome">ABOUT US</button>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <HoverImage image={homeImageMain} />
            {/* <img src={homeImageMain} className={classes.image} alt=""/> */}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Banner;
