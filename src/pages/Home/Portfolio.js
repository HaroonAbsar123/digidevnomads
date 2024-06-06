import React, { useContext, useRef, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from './Portfolio.module.css';
import Two from '../../Assets/Projects/6.jpg';
import One from '../../Assets/Projects/1.jpg';
import Three from '../../Assets/Projects/7.jpg';
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { MyContext } from "../../Context/MyContext";

export default function Portfolio(){

    
    const [showAll, setShowAll] = useState(false);
    const lastRef = useRef();
    const {portfolioRef} = useContext(MyContext)

    function handleShowAll() {
        if(!showAll){
        setShowAll(true);
        setTimeout(() => {
            if (lastRef.current) {
                lastRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
    } else {
        setShowAll(false);
    }
    }




    return(
        <section ref={portfolioRef} style={{ position: 'relative' }}>
        <Container fluid className="home-portfolio" id="home">
          <Container className="home-content">
        <div className={classes.container}>
            <Row style={{flex: 1, display: 'flex', gap: '10px'}}>
                <Col style={{flex: 1, display: 'flex', alignItems: 'center', padding: "0px", minWidth: '300px'}}>
                    <div>
                <div className={classes.titleColumnTitle} >A BRIEF OVERVIEW OF OUR WORK</div>
            <button onClick={handleShowAll} className="buttonHome">VIEW { showAll ? "LESS" : "MORE"} WORK</button>
            </div>
                </Col>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={One}/>
                </Col>
            </Row>
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                </Col>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Three}/>
                </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={One}/>
                    </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                    </Col>
            </Row>


            {
                showAll && 
                <div ref={lastRef}>
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                </Col>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Three}/>
                </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={One}/>
                    </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                    </Col>
            </Row>

                
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                </Col>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Three}/>
                </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={One}/>
                    </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                    </Col>
            </Row>

                
            <Row style={{flex: 1, display: 'flex', gap: '10px', marginTop: '10px'}}>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                </Col>
                <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Three}/>
                </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={One}/>
                    </Col>
                    <Col style={{flex: 1, padding: '0px', maxHeight: '300px', minWidth: '300px'}} className={classes.serviceColumn}>
                    <PortfolioCard image={Two}/>
                    </Col>
            </Row>

                
            </div>
            }

        </div>
        
        </Container>
      </Container>
    </section>
    )
}