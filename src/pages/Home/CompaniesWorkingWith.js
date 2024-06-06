import React from "react";
import classes from "./CompaniesWorkingWith.module.css";
import knackfunding from "../../Assets/Logos/knackfunding.png";
import Match4You from "../../Assets/Logos/Match4You.png";
import IBInnovators from "../../Assets/Logos/IB Innovators.png";
import TheFundedTrader from "../../Assets/Logos/The Funded Trader .png";
import EZL from "../../Assets/Logos/ezl.png";
import elevateTalent from "../../Assets/Logos/elevateTalent.png";
import InstantFinance from "../../Assets/Logos/Instant Finance.png";
import Staffry from "../../Assets/Logos/staffry.png";
import FastCash4Iphone from "../../Assets/Logos/Fastcash4iphones.png";
import powerPosting from "../../Assets/Logos/powerposting.png"


export default function CompaniesWorkingWith() {
  const images = [
    knackfunding,
    Match4You,
    IBInnovators,
    TheFundedTrader,
    EZL,
    InstantFinance,
    Staffry,
    FastCash4Iphone,
    elevateTalent,
    powerPosting
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));

  const speed = 20000;

  return (
    <div style={{padding: '3rem 0rem'}}>
        <div className={classes.heading}>
            Over a 1000 businesses growing with DigiDevNomads
        </div>
    <div className={classes.inner}>
      <div className={classes.wrapper}>
        <section className={classes.section} style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={classes.image} key={id}>
              <img src={image} alt={id}  style={{objectFit: 'contain', height: '100%', width: 'auto'}}/>
            </div>
          ))}
        </section>
        <section className={classes.section} style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={classes.image} key={id}>
              <img src={image} alt={id}  style={{objectFit: 'contain', height: '100%', width: 'auto'}}/>
            </div>
          ))}
        </section>
        <section className={classes.section} style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={classes.image} key={id}>
              <img src={image} alt={id} style={{objectFit: 'contain', height: '100%', width: 'auto'}} />
            </div>
          ))}
        </section>
      </div>
    </div>
    </div>
  );
}
