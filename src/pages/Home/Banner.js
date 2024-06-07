import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from './Banner.module.css';
import homeImageMain from '../../Assets/homeImageMain.png'
import HoverImage from "./HoverImage";
import { MyContext } from "../../Context/MyContext";
function Banner() {
  const navigate = useNavigate();
  const {aboutUsRef} = useContext(MyContext);

  const slogan="Elevate your digital presence"

  return (
    <section style={{ position: 'relative' }}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" style={{paddingTop: '6rem'}}>
          <div className={classes.textContainer}>
            <div>
            <div className={classes.upperText}>
            ONE STOP DIGITAL SOLUTIONS
            </div>
            <div className={classes.middleText}>
              {slogan?.toUpperCase()}
            </div>
            <button onClick={() => {
              aboutUsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });

            }} className="buttonHome">ABOUT US</button>
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
