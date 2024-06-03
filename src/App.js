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
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <FinalFooter /> */}
      </div>
      </MyContextProvider>
    </Router>
  );
}

export default App;
