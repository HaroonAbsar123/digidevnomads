import React from "react";
import { useNavigate } from "react-router-dom";
import FadeInAnimation from "../../components/FadeInComponent";
import Footer from "../../components/Footer/Footer";
import Appointment from "../BookAppointment/Appointment";
import Particle from "../Particle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CompaniesWorkingWith from "./CompaniesWorkingWith";
import ContactUs from "./ContactUs";
import ImageInText from "./ImageInText";
import NewIdeas from "./NewIdeas";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Portfolio from "./Portfolio";
import SubscribeEmail from "./SubscribeEmail";

function Home() {

  return (
    <section style={{background: '#16161e'}}>
    <Particle />
      <Banner />
      <CompaniesWorkingWith />
      <AboutUs />
      <OurServices />
      <Portfolio />
      {/* <NewIdeas /> */}
      <OurTeam />
      <ImageInText />
      <ContactUs />
      <Appointment />
      <SubscribeEmail />
      <Footer />
    </section>
  );
}

export default Home;
