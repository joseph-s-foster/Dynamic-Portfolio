import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import useImagesLoaded from "./hooks/loading"; // import custom hook
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();

  // Dummy image URLs for example; replace with actual URLs used in your project
  const imageUrls = [
    "./src/assets/project/background.png",
    "./src/assets/project/wyr.png",
    "./src/assets/project/blog.png",
    "./src/assets/project/pulse.png",
    "./src/assets/project/coffee.png",
    // Add all the image URLs that need to be loaded
  ];

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
      {!imagesLoaded && <h2 className="loading animate-fade">Loading...</h2>}
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
