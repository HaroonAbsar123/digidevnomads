import React, { useContext, useRef, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import classes from "./OurServices.module.css";
import MobileDevIcon from "../../Assets/mobiledev.png";
import WebDevIcon from "../../Assets/webdev.png";
import MarketingIcon from "../../Assets/marketing.png";
import { MyContext } from "../../Context/MyContext";
import Card from "./Card";

export default function OurServices() {
  const [showAll, setShowAll] = useState(false);
  const { serviceRef } = useContext(MyContext);
  const lastRef = useRef();

  function handleShowAll() {
    if(!showAll){
    setShowAll(true);
    setTimeout(() => {
        if (lastRef.current) {
            lastRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 0);
} else {
    setShowAll(false);
}
}


  return (
    <section ref={serviceRef} style={{ position: "relative" }}>
      <Container fluid id="home">
        <Container className="home-content" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className={classes.container} style={{padding: '0px'}}>
            <Row style={{ flex: 1, display: "flex", gap: "10px" }}>
              <Col
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "0px",
                  minWidth: '250px'
                }}
              >
                <div>
                  <div className={classes.titleColumnTitle}>
                    UNLOCK REVENUE GROWTH FOR YOUR BUSINESS
                  </div>
                  <button onClick={handleShowAll} className="buttonHome">
                    VIEW  {showAll ? "LESS" : "ALL"} SERVICES
                  </button>
                </div>
              </Col>
              <Col style={{ flex: 1, padding: "0px",
                  minWidth: '250px' }}>
                <Card>
                  <div
                  className={classes.iconService}
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                      filter: "blur(0px)",
                    }}
                  >
                    <img
                      src={WebDevIcon}
                      alt=""
                      style={{ maxHeight: "60px", marginTop: "10px" }}
                    />
                  </div>
                  <div style={{ flex: 1, filter: "blur(0px)" }}>
                    <div className={classes.serviceColumnTitle}>
                      WEB SOLUTION
                    </div>
                    <div className={classes.serviceColumnPara}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                      <br />
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    {/* <button className={classes.readMoreButton}>
                      READ DETAILS
                    </button> */}
                  </div>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                flex: 1,
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <Col style={{ flex: 1, padding: "0px",
                  minWidth: '250px' }}>
                <Card>
                  <div
                  className={classes.iconService}
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={WebDevIcon}
                      alt=""
                      style={{ maxHeight: "60px", marginTop: "10px" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className={classes.serviceColumnTitle}>
                      MOBILE APPLICATION
                    </div>
                    <div className={classes.serviceColumnPara}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                      <br />
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    {/* <button className={classes.readMoreButton}>
                      READ DETAILS
                    </button> */}
                  </div>
                </Card>
              </Col>
              <Col style={{ flex: 1, padding: "0px",
                  minWidth: '250px' }}>
                <Card>
                  <div
                  className={classes.iconService}
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={WebDevIcon}
                      alt=""
                      style={{ maxHeight: "60px", marginTop: "10px" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className={classes.serviceColumnTitle}>
                      SOCIAL MEDIA MARKETING
                    </div>
                    <div className={classes.serviceColumnPara}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                      <br />
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    {/* <button className={classes.readMoreButton}>
                      READ DETAILS
                    </button> */}
                  </div>
                </Card>
              </Col>
            </Row>

            {showAll && (
              <div ref={lastRef}>
                <Row
                  style={{
                    flex: 1,
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                <Col style={{ flex: 1, padding: "0px",
                    minWidth: '250px' }}>
                  <Card>
                    <div
                  className={classes.iconService}
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                    }}
                    >
                      <img
                        src={WebDevIcon}
                        alt=""
                        style={{ maxHeight: "60px", marginTop: "10px" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className={classes.serviceColumnTitle}>
                        EMAIL MARKETING
                      </div>
                      <div className={classes.serviceColumnPara}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      {/* <button className={classes.readMoreButton}>
                        READ DETAILS
                      </button> */}
                    </div>
                  </Card>
                </Col>
                <Col style={{ flex: 1, padding: "0px",
                    minWidth: '250px' }}>
                  <Card>
                    <div
                  className={classes.iconService}
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                    }}
                    >
                      <img
                        src={WebDevIcon}
                        alt=""
                        style={{ maxHeight: "60px", marginTop: "10px" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className={classes.serviceColumnTitle}>
                        GRAPHIC DESIGNING
                      </div>
                      <div className={classes.serviceColumnPara}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      {/* <button className={classes.readMoreButton}>
                        READ DETAILS
                      </button> */}
                    </div>
                  </Card>
                </Col>
                </Row>
              </div>
            )}
          </div>
        </Container>
      </Container>
    </section>
  );
}
