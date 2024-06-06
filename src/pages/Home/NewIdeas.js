import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from './NewIdeas.module.css';
import WebDev from '../../Assets/webdev.png';
import idea from '../../Assets/idea.png';
import analysis from '../../Assets/analysis.png';
import result from '../../Assets/result.png';
import { FcIdea } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";



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
                <img src={idea} alt="" style={{maxHeight: '80px'}} />
                <div className={classes.cardTitle}>FIND NEW IDEAS</div>
                <div className={classes.cardDescription}>methods and techniques for taking raw data - mining for insights and years of experience will</div>
                </Col>
                {/* <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{borderTop: '5px dotted #7e7e7e', flex: 1}}></div>
                </Col> */}
                <Col style={{minWidth: '250px'}}>
                <img src={analysis} alt="" style={{maxHeight: '80px'}} />
                <div className={classes.cardTitle}>DIAGNOSIS & ANALYSIS</div>
                <div className={classes.cardDescription}>methods and techniques for taking raw data - mining for insights and years of experience will</div>
                </Col>
                {/* <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{borderTop: '5px dotted #7e7e7e', flex: 1}}></div>
                </Col> */}
                <Col style={{minWidth: '250px'}}>
                <img src={result} alt="" style={{maxHeight: '80px'}} />
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