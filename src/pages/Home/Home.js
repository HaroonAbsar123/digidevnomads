import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Appointment from "../BookAppointment/Appointment";
import Particle from "../Particle";
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
  const navigate = useNavigate();

  return (
    <section style={{background: '#16161e'}}>
    <Particle />
      <Banner />
      <CompaniesWorkingWith />
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
