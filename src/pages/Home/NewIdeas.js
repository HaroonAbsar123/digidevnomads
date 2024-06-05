import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from './NewIdeas.module.css';
import WebDev from '../../Assets/webdev.png';

export default function NewIdeas(){

    return(
        <section style={{ position: 'relative' }}>
        <Container fluid id="home">
          <Container 
        //   className="home-content"
          >
        <div className={classes.container}>
            <Row style={{display: 'flex', gap: '20px'}}>
                <Col style={{minWidth: '250px'}}>
                <img src={WebDev} alt="" style={{maxHeight: '80px'}} />
                <div className={classes.cardTitle}>FIND NEW IDEAS</div>
                <div className={classes.cardDescription}>methods and techniques for taking raw data - mining for insights and years of experience will</div>
                </Col>
                {/* <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{borderTop: '5px dotted #7e7e7e', flex: 1}}></div>
                </Col> */}
                <Col style={{minWidth: '250px'}}>
                <img src={WebDev} alt="" style={{maxHeight: '80px'}} />
                <div className={classes.cardTitle}>DIAGNOSIS & ANALYSIS</div>
                <div className={classes.cardDescription}>methods and techniques for taking raw data - mining for insights and years of experience will</div>
                </Col>
                {/* <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{borderTop: '5px dotted #7e7e7e', flex: 1}}></div>
                </Col> */}
                <Col style={{minWidth: '250px'}}>
                <img src={WebDev} alt="" style={{maxHeight: '80px'}} />
                <div className={classes.cardTitle}>IMPLEMENT & RESULT</div>
                <div className={classes.cardDescription}>methods and techniques for taking raw data - mining for insights and years of experience will</div>
                </Col>
            </Row>
        </div>
        
        </Container>
      </Container>
    </section>
    )
}