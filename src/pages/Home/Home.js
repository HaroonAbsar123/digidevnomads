import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import CompaniesWorkingWith from "./CompaniesWorkingWith";
import OurServices from "./OurServices";
import Portfolio from "./Portfolio";

function Home() {
  const navigate = useNavigate();

  return (
    <section style={{background: '#16161e'}}>
      <Banner />
      <CompaniesWorkingWith />
      <OurServices />
      <Portfolio />
    </section>
  );
}

export default Home;
