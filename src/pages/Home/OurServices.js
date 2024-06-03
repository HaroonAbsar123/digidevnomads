import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import classes from './OurServices.module.css';
import MobileDevIcon from '../../Assets/mobiledev.png';
import WebDevIcon from '../../Assets/webdev.png';
import MarketingIcon from '../../Assets/marketing.png';

export default function OurServices(){

    return(
        <section style={{ position: 'relative' }}>
        <Container fluid id="home">
          <Container className="home-content">
          <div className={classes.container}>
            <Row style={{flex: 1, display: 'flex', gap: '10px'}}>
                <Col style={{flex: 1}}>
                <div className={classes.titleColumnTitle} >UNLOCK REVENUE GROWTH FOR YOUR BUSINESS</div>
            <button className="buttonHome">VIEW ALL SERVICES</button>
                </Col>
                <Col style={{flex: 1}} className={classes.serviceColumn}>
                <div style={{flex: 0.3, display: 'flex', justifyContent: 'center', filter: "blur(0px)"}}>
                    <img src={WebDevIcon} alt="" style={{ maxHeight: '60px', marginTop: '10px'}}/>
                </div>
                <div style={{flex: 1, filter: "blur(0px)"}}>
                    <div className={classes.serviceColumnTitle}>WEB SOLUTION</div>
                    <div className={classes.serviceColumnPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    <button className={classes.readMoreButton}>READ DETAILS</button>
                </div>
                </Col>
            </Row>
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
            <Col style={{flex: 1}} className={classes.serviceColumn}>
                <div style={{flex: 0.3, display: 'flex', justifyContent: 'center'}}>
                    <img src={WebDevIcon} alt="" style={{ maxHeight: '60px', marginTop: '10px'}}/>
                </div>
                <div style={{flex: 1}}>
                    <div className={classes.serviceColumnTitle}>WEB SOLUTION</div>
                    <div className={classes.serviceColumnPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    <button className={classes.readMoreButton}>READ DETAILS</button>
                </div>
                </Col>
                <Col style={{flex: 1}} className={classes.serviceColumn}>
                <div style={{flex: 0.3, display: 'flex', justifyContent: 'center'}}>
                    <img src={WebDevIcon} alt="" style={{ maxHeight: '60px', marginTop: '10px'}}/>
                </div>
                <div style={{flex: 1}}>
                    <div className={classes.serviceColumnTitle}>WEB SOLUTION</div>
                    <div className={classes.serviceColumnPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    <button className={classes.readMoreButton}>READ DETAILS</button>
                </div>
                </Col>

            </Row>
            </div>
        </Container>
      </Container>
    </section>
    )
}