import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import background from "../assets/project/background.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Trending from "../components/Trending";

function Home() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "UX-Driven";
  const texttoType2 = "Mobile-Friendly";
  const texttoType3 = "Full Stack Web Developer";

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const typeAndBackspace = async () => {
      const cursorFlashInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < textToType.length; i++) {
        setTypedText((prevText) => prevText + textToType[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = textToType.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < texttoType2.length; i++) {
        setTypedText((prevText) => prevText + texttoType2[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = texttoType2.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < texttoType3.length; i++) {
        setTypedText((prevText) => prevText + texttoType3[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = texttoType3.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      clearInterval(cursorFlashInterval);

      typeAndBackspace();
    };

    typeAndBackspace();
  }, [textToType]);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("api");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <a className="caret" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
        </a>
      </div>
      <div
        id="api"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="api">
          <div className="apiresults">
            <div className="apitrend">
              <h3>Trending Now</h3>
            </div>
          </div>
        </div>
        <div>
          <Trending />
        </div>
        <div className="apidesc2">
          <h3
            style={{
              marginBottom: "8px",
            }}
          >
            APIs and algorithms display trending articles.
          </h3>
          <div>
            <span
              onClick={handleViewProjectsClick}
              style={{
                padding: "12px",
                fontSize: "1rem",
                border: "solid #dddddd 2px",
                borderRadius: "4px",
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
