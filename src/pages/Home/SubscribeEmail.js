import React from "react";
import classes from './SubscribeEmail.module.css';

export default function SubscribeEmail() {


  return (
    <div className={classes.container}>
      <div style={{maxWidth: '1300px', margin: '0px auto', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className={classes.serviceColumnTitle}>GET NEWSLETTER</div>
        <div className={classes.inputContainer}>
            <input placeholder="Enter your email" />
            <button style={{margin: '0px'}} className="buttonHome">SUBSCRIBE</button>
        </div>
        </div>
    </div>
  );
}
