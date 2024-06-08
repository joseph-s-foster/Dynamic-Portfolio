import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./hooks/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkImages = () => {
      const images = document.querySelectorAll("img");
      const divsWithBackgrounds = document.querySelectorAll("div[style*='background-image']");

      const imagePromises = Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      );

      const backgroundPromises = Array.from(divsWithBackgrounds).map(
        (div) => {
          const backgroundImage = div.style.backgroundImage.slice(5, -2).replace(/['"]+/g, '');
          return new Promise((resolve) => {
            const img = new Image();
            img.src = backgroundImage;
            img.onload = resolve;
            img.onerror = resolve;
          });
        }
      );

      return Promise.all([...imagePromises, ...backgroundPromises]);
    };

    const handleLoad = () => {
      checkImages().then(() => {
        setIsLoading(false);
      });
    };

    handleLoad();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
