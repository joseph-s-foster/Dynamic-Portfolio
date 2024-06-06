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

  // store data locally
  useEffect(() => {
    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || {};
    const currentPage = location.pathname;
    
    // conditionally renders loading useEffect on first page visit only
    if (!visitedPages[currentPage]) {
      visitedPages[currentPage] = true;
      localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
    }

    // Mark loading as false after initial render
    setLoading(false);
    // Set fade-in effect after initial render
    setFadeIn(true);
  }, [location]);

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      {loading && <h2 className="loading animate-fade">Loading...</h2>}
      {!loading && (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
