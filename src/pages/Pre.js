// import React from "react";
// function Pre(props) {
//   return <div id={props.load ? "preloader" : "preloader-none"}></div>;
// }

// export default Pre;


import React from 'react';
import Modal from '@mui/material/Modal';
import classes from './Pre.module.css';
import Logo from "../Assets/logo.png";
import Loader from '../components/Loader/Loader';

// TO INSTALL MATERIAL UI TYPE FOLLOWING IN TERMINAL
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material @mui/styled-engine-sc styled-components

export default function Pre({load}) {
  return (
    <Modal
      className={classes.modal}
      open={load}
    >
      <div className={classes.container}>
        <div className={classes.innerContainer}>
        <div className={classes.childContainer}>
          <Loader />
          </div>
        </div>
      </div>
    </Modal>
  );
};



