import { createContext, useRef, useState, useEffect } from "react";

import homeImageMain from "../Assets/homeImageMain.png";
import knackfunding from "../Assets/Logos/knackfunding.png";
import Match4You from "../Assets/Logos/Match4You.png";
import IBInnovators from "../Assets/Logos/IB Innovators.png";
import TheFundedTrader from "../Assets/Logos/The Funded Trader .png";
import EZL from "../Assets/Logos/ezl.png";
import elevateTalent from "../Assets/Logos/elevateTalent.png";
import InstantFinance from "../Assets/Logos/Instant Finance.png";
import Staffry from "../Assets/Logos/staffry.png";
import FastCash4Iphone from "../Assets/Logos/Fastcash4iphones.png";
import Two from '../Assets/Projects/6.jpg';
import One from '../Assets/Projects/1.jpg';
import Three from '../Assets/Projects/7.jpg';
import ourTeam from "../Assets/ourTeam.jpg";
import powerPosting from "../Assets/Logos/powerposting.png"


import webDevelopment from "../Assets/webDevelopment.jpg";
import mobileDevelopment from "../Assets/mobileDevelopment.jpg";
import socialMediaMarketing from "../Assets/socialMediaMarketing.jpg";
import emailMarketing from "../Assets/emailMarketing.jpg";
import amazon from "../Assets/amazon.jpg";
import virtualAssistant from "../Assets/virtualAssistant.jpg";
import graphicDesigning from "../Assets/graphicDesigning.jpg";

export const MyContext = createContext({});

const images = [
  homeImageMain,
  // knackfunding,
  // Match4You,
  // IBInnovators,
  // TheFundedTrader,
  // EZL,
  // elevateTalent,
  // InstantFinance,
  // Staffry,
  // FastCash4Iphone,
  // Two,
  // One,
  // Three,
  // ourTeam,
  // powerPosting,
  // webDevelopment,
  // mobileDevelopment,
  // socialMediaMarketing,
  // emailMarketing,
  // amazon,
  // virtualAssistant,
  // graphicDesigning
];

export const MyContextProvider = ({ children }) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const serviceRef = useRef();
  const contactUsRef = useRef();
  const appointmentRef = useRef();
  const portfolioRef = useRef();
  const aboutUsRef = useRef();

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map(src => new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      }));

      await Promise.all(promises);
      setAllImagesLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <MyContext.Provider value={{ serviceRef, contactUsRef, appointmentRef, portfolioRef, allImagesLoaded, aboutUsRef }}>
      {children}
    </MyContext.Provider>
  );
};
