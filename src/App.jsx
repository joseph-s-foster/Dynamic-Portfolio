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
    const visitedBefore = localStorage.getItem("visitedBefore");

    if (!visitedBefore) {
      // First visit, set fadeIn to true and mark as visited
      localStorage.setItem("visitedBefore", "true");
      setFadeIn(true);
    } else {
      // Subsequent visits, set fadeIn to true after a delay
      const timeout = setTimeout(() => {
        setFadeIn(true);
      }, 500); // Adjust the delay time as needed

      return () => clearTimeout(timeout); // Cleanup the timeout
    }
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
