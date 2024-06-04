import React, { useState, useEffect } from "react";
import Preloader from "../src/pages/Pre";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home/Home";
import FinalFooter from "./pages/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyContextProvider } from "./Context/MyContext";
import { getAuth } from "firebase/auth";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BookAppointment from "./pages/BookAppointment/BookAppointment";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const auth=getAuth();

  return (
    <Router>
      
    
      <MyContextProvider>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <FinalFooter /> */}
    </ThemeProvider>
      </div>
      </MyContextProvider>
    </Router>
  );
}

export default App;
