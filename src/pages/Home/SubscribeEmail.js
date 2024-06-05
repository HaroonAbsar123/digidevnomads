import React from "react";
import classes from './SubscribeEmail.module.css';

export default function SubscribeEmail() {


  return (
    <div className={classes.container}>
      <div style={{maxWidth: '1300px', margin: '0px auto', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        <div className={classes.serviceColumnTitle}>ELEVATE YOUR BUSINESS TODAY</div>
        {/* <div className={classes.inputContainer}>
            <input placeholder="Enter your email" />
            <button style={{margin: '0px'}} className="buttonHome">SUBSCRIBE</button>
        </div> */}
        </div>
    </div>
  );
}
