import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import background from "../assets/project/background.png";
import Trending from "../components/Trending";

function Home() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "UX-Driven";
  const texttoType2 = "Mobile-Friendly";
  const texttoType3 = "Full Stack Web Developer";

  const location = useLocation();

  // Scroll to top when the location changes (i.e., route changes)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const typeAndBackspace = async () => {
      const cursorFlashInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500); // Flash interval in milliseconds

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Type out
      for (let i = 0; i < textToType.length; i++) {
        setTypedText((prevText) => prevText + textToType[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Wait for a moment before backspacing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Backspace
      for (let i = textToType.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Type out
      for (let i = 0; i < texttoType2.length; i++) {
        setTypedText((prevText) => prevText + texttoType2[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Wait for a moment before backspacing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Backspace
      for (let i = texttoType2.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Type out
      for (let i = 0; i < texttoType3.length; i++) {
        setTypedText((prevText) => prevText + texttoType3[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Wait for a moment before backspacing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Backspace
      for (let i = texttoType3.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Clear the interval to stop flashing when not needed
      clearInterval(cursorFlashInterval);

      // Repeat the process
      typeAndBackspace();
    };

    typeAndBackspace();
  }, [textToType]);

  const handleViewProjectsClick = () => {
    window.location.href = "/projects";
  };  

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="interact1">
          <h1
            style={{
              fontSize: "3rem",
              paddingBottom: "4px",
            }}
          >
            Joseph Foster
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
            }}
          >
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
      </div>
      <div id="api" className="api">
        {/* Trending Component Container */}
        <div className="apiresults">
          <div>
            <Trending />
          </div>
        </div>

        {/* Container for h3 */}
        <div className="apidesc">
          <h3>
            API calls and sorting algorithms generate top weekly results.
          </h3>
          <div style={{ marginTop: "32px" }}>
            {/* Updated Link to use react-router-dom */}
            <span
              onClick={handleViewProjectsClick}
              style={{
                padding: "12px",
                fontSize: "1.25rem",
                border: "solid #dddddd 2px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              className="explore"
            >
              View more projects
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
