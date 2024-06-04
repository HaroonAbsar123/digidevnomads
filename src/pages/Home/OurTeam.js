import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from './OurTeam.module.css';

import Haroon from '../../Assets/Team/Haroon.jpg';

export default function OurTeam(){

    return(
        <section style={{ position: 'relative' }}>
        <Container fluid className="home-portfolio" id="home">
          <Container className="home-content">
        <div className={classes.container}>
            <Row style={{flex: 1, display: 'flex', gap: '10px'}}>
                <Col style={{flex: 1, display: 'flex', alignItems: 'center', padding: '0px'}}>
                    <div>
                <div className={classes.titleColumnTitle} >PEOPLE LOVED OUR TEAM</div>
            <button className="buttonHome">VIEW ALL TEAM</button>
            </div>
                </Col>
                <Col style={{flex: 1, padding: '0px'}} >
                        <Col style={{padding: '0px', borderRadius: '1rem', overflow: 'hidden'}}>
                <img src={Haroon} alt="" style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}/>
                        </Col>
                </Col>
            </Row>
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
                        <Col style={{padding: '0px', borderRadius: '1rem', overflow: 'hidden'}}>
                <img src={Haroon} alt="" style={{ width: 'auto', height: '300px', objectFit: 'cover', objectPosition: 'center'}}/>
                        </Col>
                        <Col style={{padding: '0px', borderRadius: '1rem', overflow: 'hidden'}}>
                <img src={Haroon} alt="" style={{ width: 'auto', height: '300px', objectFit: 'cover', objectPosition: 'center'}}/>
                        </Col>
                        <Col style={{padding: '0px', borderRadius: '1rem', overflow: 'hidden'}}>
                <img src={Haroon} alt="" style={{ width: 'auto', height: '300px', objectFit: 'cover', objectPosition: 'center'}}/>
                        </Col>
                        <Col style={{padding: '0px', borderRadius: '1rem', overflow: 'hidden'}}>
                <img src={Haroon} alt="" style={{ width: 'auto', height: '300px', objectFit: 'cover', objectPosition: 'center'}}/>
                        </Col>
            </Row>
        </div>
        
        </Container>
      </Container>

    </section>
    )
}