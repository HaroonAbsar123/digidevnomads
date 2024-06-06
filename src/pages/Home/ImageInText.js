import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import classes from "./ContactUs.module.css";


export default function ImageInText() {

  const {contactUsRef} = useContext(MyContext)

  return (
    <div ref={contactUsRef}>
    <div style={{padding: '3rem 0rem', textAlign: 'center', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '0rem'}}>
        <div className="ben">GET IN TOUCH  </div>
    </div>
    
    <div className={classes.emailContainer}>
    <div>check@example.com</div>
    <div>+92-123-1231234</div>

  </div>
  </div>
  );
}
