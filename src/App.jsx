import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || {};
    const currentPage = location.pathname;

    if (!visitedPages[currentPage]) {
      visitedPages[currentPage] = true;
      localStorage.setItem("visitedPages", JSON.stringify(visitedPages));

      setLoading(true);
      setFadeIn(false);

      const timer = setTimeout(() => {
        setLoading(false);
        setTimeout(() => setFadeIn(true), 10); // Add slight delay to trigger fade-in
      }, 500); // Simulate a 1-second loading time

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      setFadeIn(true);
    }
  }, [location]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
