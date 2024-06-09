import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from "./OurTeam.module.css";

import ourTeam from "../../Assets/ourTeam.jpg";
import Testimonial from "../../components/Testimonial/Testimonial";
import Carousel from "react-bootstrap/Carousel";
import { MyContext } from "../../Context/MyContext";

export default function OurTeam() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {appointmentRef} = useContext(MyContext)

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && cardRef.current) {
      containerRef.current.style.minHeight = `${cardRef.current.offsetHeight}px`;
    }
  }, []);

  const testimonials=[
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      title: "Testimonial",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
  ]


  return (
    <section style={{ position: "relative" }}>
      <Container fluid className="home-portfolio" id="home">
        <Container className="home-content">
          <div className={classes.container}>
            <Row style={{ flex: 1, display: "flex", gap: "10px" }}>
              <Col
                className={classes.firstCol}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "0px",
                  minWidth: "300px",
                }}
              >
                <div>
                  <div className={classes.titleColumnTitle}>
                    PEOPLE LOVED OUR TEAM
                  </div>
                  <button onClick={() => {
                  window.location.hash = '#book-appointment';
                  appointmentRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}  className="buttonHome">LET'S MEET</button>
                </div>
              </Col>
              <Col className={classes.ourTeamCol}>

              <div className="containerMain noselect" 
ref={containerRef}>

  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card" ref={cardRef} style={{ backgroundImage: `url(${ourTeam})`, borderRadius: '1rem', height: '300px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} className={classes.serviceColumn}>
    </div>
  </div>
</div>

                {/* <img src={Haroon} alt="" className={classes.ourTeamImage} /> */}
              </Col>
            </Row>
            <Row style={{ flex: 1, marginTop: "10px" }}>
            <Carousel interval={2000} style={{ overflow: 'hidden', padding: '0px' }} indicators={false} controls={false}>
      {
        isMobile
          ? testimonials?.map((item, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', width: '100%' }}>
                <Testimonial title={item?.title} review={item.review} />
              </div>
            </Carousel.Item>
          ))
          : testimonials?.reduce((acc, item, index) => {
            const groupIndex = Math.floor(index / 4);
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(
              <div key={index} style={{ flex: 1, width: '25%' }}>
                <Testimonial title={item?.title} review={item.review} />
              </div>
            );
            return acc;
          }, []).map((group, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', gap: '10px', width: '100%', flexWrap: 'wrap' }}>
                {group}
              </div>
            </Carousel.Item>
          ))
      }
    </Carousel>

                {/* <Carousel.Item>
                  <div style={{ flex: 1, display: "flex", gap: "10px", width: '100%', flexWrap: 'wrap' }}>
                      <Testimonial
                        title="Testimonial"
                        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua"
                      />
                      <Testimonial
                        title="Testimonial"
                        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua"
                      />
                      <Testimonial
                        title="Testimonial"
                        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua"
                      />
                      <Testimonial
                        title="Testimonial"
                        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua"
                      />
                  </div>
                </Carousel.Item> */}

            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}
