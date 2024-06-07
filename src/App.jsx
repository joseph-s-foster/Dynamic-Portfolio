import React, { useState, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import loading from "./hooks/loading";
import background from "./assets/project/background.png";
import wyr from "./assets/project/wyr.png";
import blog from "./assets/project/blog.png";
import pulse from "./assets/project/pulse.png";
import coffee from "./assets/project/coffee.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();
  const imageUrls = useMemo(() => [background, wyr, blog, pulse, coffee], []); // Memoize imageUrls array

  const imagesLoaded = loading(imageUrls);

  useEffect(() => {
    console.log("Images loaded:", imagesLoaded);

    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || {};
    const currentPage = location.pathname;

    if (!visitedPages[currentPage]) {
      visitedPages[currentPage] = true;
      localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
    }

    if (imagesLoaded) {
      setFadeIn(true);
    }
  }, [location.pathname, imagesLoaded]); // Only re-run effect when location.pathname or imagesLoaded changes

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      {imagesLoaded ? (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      ) : (
        <div className="loading">
          <h2>Loading assets...</h2>
        </div>
      )}
    </div>
  );
}

export default App;
