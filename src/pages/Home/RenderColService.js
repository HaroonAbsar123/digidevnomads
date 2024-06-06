import React, { useContext, useRef, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import classes from "./OurServices.module.css";
import Card from "./Card";


export default function RenderColService({image, title,  description}) {


  return (
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
                      src={image}
                      alt=""
                      style={{ height: "100%", width: '100%', objectFit: 'cover', opacity: '0.7', borderRadius: '15px', border: '2px solid #8e8e8e', boxShadow: '1px 5px 10px #0e0e15' }}
                    />
                  </div>
                  <div style={{ flex: 1, filter: "blur(0px)" }}>
                    <div className={classes.serviceColumnTitle}>
                      {title}
                    </div>
                    <div className={classes.serviceColumnPara} dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </Card>
              </Col>
  );
}
