import React, { useContext, useRef, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import classes from "./OurServices.module.css";
import MobileDevIcon from "../../Assets/mobiledev.png";
import WebDevIcon from "../../Assets/webdev.png";
import MarketingIcon from "../../Assets/marketing.png";
import { MyContext } from "../../Context/MyContext";
import Card from "./Card";

import webDevelopment from "../../Assets/webDevelopment.jpg";
import mobileDevelopment from "../../Assets/mobileDevelopment.jpg";
import socialMediaMarketing from "../../Assets/socialMediaMarketing.jpg";
import emailMarketing from "../../Assets/emailMarketing.jpg";
import amazon from "../../Assets/amazon.jpg";
import virtualAssistant from "../../Assets/virtualAssistant.jpg";
import graphicDesigning from "../../Assets/graphicDesigning.jpg";
import RenderColService from "./RenderColService";

export default function OurServices() {
  const [showAll, setShowAll] = useState(false);
  const { serviceRef } = useContext(MyContext);
  const lastRef = useRef();

  function handleShowAll() {
    if (!showAll) {
      setShowAll(true);
      setTimeout(() => {
        if (lastRef.current) {
          lastRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 0);
    } else {
      setShowAll(false);
    }
  }

  return (
    <section ref={serviceRef} style={{ position: "relative" }}>
      <Container fluid id="home">
        <Container
          className="home-content"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.container} style={{ padding: "0px" }}>
            <Row
              style={{
                flex: 1,
                display: "flex",
                gap: "10px",
                alignItems: "stretch",
              }}
            >
              <Col
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "0px",
                  minWidth: "250px",
                }}
              >
                <div>
                  <div className={classes.titleColumnTitle}>
                    UNLOCK REVENUE GROWTH FOR YOUR BUSINESS
                  </div>
                  <button onClick={handleShowAll} className="buttonHome">
                    {showAll ? "COLLAPSE" : "VIEW ALL SERVICES"}
                  </button>
                </div>
              </Col>
              <RenderColService
                image={webDevelopment}
                title="WEB SOLUTION"
                description={`Our web development team crafts robust, scalable, and user-friendly websites tailored to your business needs. We leverage modern technologies to create dynamic, responsive, and visually appealing websites that drive engagement and conversion. From e-commerce platforms to corporate websites, our solutions are designed to enhance your online presence and provide seamless user experiences.`}
              />
            </Row>
            <Row
              style={{
                flex: 1,
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                alignItems: "stretch",
              }}
            >
              <RenderColService
                image={mobileDevelopment}
                title="MOBILE APPLICATION"
                description={`We specialize in creating high-performance, intuitive mobile applications that cater to your business needs. Our team develops apps for both iOS and Android platforms, ensuring a seamless user experience. We focus on functionality, user interface, and performance to deliver apps that engage users and drive business growth. By leveraging the latest technologies, we create apps that are not only visually appealing but also secure and scalable.`}
              />

              <RenderColService
                image={socialMediaMarketing}
                title="SOCIAL MEDIA MARKETING"
                description={`Our social media marketing services are designed to amplify your brand's online presence. We create targeted strategies to engage your audience across various platforms, including Facebook, Instagram, LinkedIn, and Twitter. By crafting compelling content and leveraging advanced analytics, we drive engagement and conversions. Our team ensures your brand's voice is consistent and impactful, helping you build a loyal customer base and achieve measurable growth.`}
              />
            </Row>

            {showAll && (
              <div ref={lastRef}>
                <Row
                  style={{
                    flex: 1,
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    alignItems: "stretch",
                  }}
                >
                  <RenderColService
                    image={emailMarketing}
                    title="EMAIL MARKETING"
                    description={`Our email marketing services help you connect with your audience effectively. We design and implement personalized email campaigns that drive engagement and conversions. By utilizing advanced segmentation and automation, we ensure your messages reach the right people at the right time. Our team focuses on creating compelling content and eye-catching designs to increase open rates and click-through rates, ultimately boosting your ROI.`}
                  />

                  <RenderColService
                    image={graphicDesigning}
                    title="GRAPHIC DESIGNING"
                    description={`Our graphic designing services bring your brand to life with visually stunning and impactful designs. From logos and brochures to social media graphics and website visuals, we create designs that resonate with your audience. Our creative team combines artistry with strategic thinking to deliver designs that enhance your brand identity and communication. We ensure each piece aligns with your brand's voice and message, making a lasting impression.`}
                  />
                </Row>

                <Row
                  style={{
                    flex: 1,
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    alignItems: "stretch",
                  }}
                >
                  <RenderColService
                    image={amazon}
                    title="AMAZON VA'S"
                    description={`Our Amazon Virtual Assistants provide comprehensive support to help you manage and grow your Amazon business. From product listing optimization and keyword research to inventory management and customer service, we handle all aspects of your Amazon store. Our team is well-versed in Amazon’s algorithms and best practices, ensuring your products achieve higher visibility and sales. We help streamline your operations, allowing you to focus on scaling your business.`}
                  />

                  <RenderColService
                    image={virtualAssistant}
                    title="ADMIN VA'S"
                    description={`Our Admin Virtual Assistants offer reliable and efficient administrative support to streamline your business operations. From managing emails and scheduling appointments to handling data entry and customer support, we cover a wide range of administrative tasks. Our VAs are skilled in using various office software and tools, ensuring seamless execution of tasks. With our support, you can focus on core business activities while we handle the day-to-day administrative duties.`}
                  />
                </Row>
              </div>
            )}
          </div>
        </Container>
      </Container>
    </section>
  );
}
