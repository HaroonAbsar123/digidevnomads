import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from './Portfolio.module.css';
import Two from '../../Assets/Projects/6.jpg';
import One from '../../Assets/Projects/1.jpg';
import Three from '../../Assets/Projects/7.jpg';

export default function Portfolio(){

    return(
        <section style={{ position: 'relative' }}>
        <Container fluid className="home-portfolio" id="home">
          <Container className="home-content">
        <div className={classes.container}>
            <Row style={{flex: 1, display: 'flex', gap: '10px'}}>
                <Col style={{flex: 1}}>
                <div className={classes.titleColumnTitle} >VIEW OUR RECENT COMPLETED PROJECTS</div>
            <button className="buttonHome">VIEW ALL PROJECTS</button>
                </Col>
                <Col style={{flex: 1, padding: '0px'}} className={classes.serviceColumn}>
                <img src={One} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center'}}/>
                </Col>
            </Row>
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
                <Col style={{flex: 1, padding: '0px'}} className={classes.serviceColumn}>
                <img src={Two} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
                </Col>
                <Col style={{flex: 1, padding: '0px'}} className={classes.serviceColumn}>
                <img src={Three} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
                </Col>
            </Row>
        </div>
        
        </Container>
      </Container>
    </section>
    )
}