import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Banner from "./Banner";
import CompaniesWorkingWith from "./CompaniesWorkingWith";
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
      <Banner />
      <CompaniesWorkingWith />
      <OurServices />
      <Portfolio />
      <NewIdeas />
      <OurTeam />
      <ImageInText />
      <SubscribeEmail />
      <Footer />
    </section>
  );
}

export default Home;
