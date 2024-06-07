import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Triggering a re-render after a short delay to apply the fade-in effect
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
