import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import classes from "./AboutUs.module.css";

export default function AboutUs() {

    const {aboutUsRef} = useContext(MyContext);

  return (
    <section ref={aboutUsRef} className={classes.sectionContainer}>
      <div className={classes.container}>
        <div className={classes.imageContainer}></div>
        <div className={classes.textContainer}>
          <div className={classes.title}>About Us</div>
          <div className={classes.para}>
            At DigitaliNation, we pride ourselves on being a dynamic and
            innovative company dedicated to providing top-tier software
            development, marketing. Founded by
            Anas Khalid and Haroon Absar, our team is composed of skilled
            professionals who are passionate about technology and committed to
            delivering exceptional solutions tailored to meet our clients'
            needs. Our mission is to empower businesses by leveraging the latest
            technologies and strategies, ensuring their growth and success in
            the digital landscape.
            <br />
            <br />
            Our comprehensive range of services includes web and mobile app
            development, social media marketing, and virtual assistance,
            designed to cater to businesses of all sizes. We believe in
            fostering long-term partnerships with our clients, understanding
            their unique challenges, and offering customized solutions that
            drive results. At Digidevnomads, we are not just a service provider
            but a trusted partner dedicated to helping your business thrive in
            an ever-evolving digital world.{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
