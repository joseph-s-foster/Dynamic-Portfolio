import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import useImagesLoaded from "./hooks/loading";
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
  const imageUrls = [background, wyr, blog, pulse, coffee];
  const imagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || {};
    const currentPage = location.pathname;

    if (!visitedPages[currentPage]) {
      visitedPages[currentPage] = true;
      localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
    }

    if (imagesLoaded) {
      setFadeIn(true);
    }
  }, [location, imagesLoaded]);

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      {!imagesLoaded && <h2 className="loading">Loading...</h2>}
      {imagesLoaded && (
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
