import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SubscribeEmail from "../Home/SubscribeEmail";
import Banner from "./Banner";
import Appointment from "./Appointment";

function BookAppointment() {
  const navigate = useNavigate();

  return (
    <section style={{background: '#16161e'}}>
      <Banner />
      <Appointment />
      <SubscribeEmail/>
      <Footer/>
    </section>
  );
}

export default BookAppointment;
