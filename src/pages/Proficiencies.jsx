import React, { useState, useEffect } from "react";
import background from "../assets/project/background.png";
import caret from "../assets/project/caret.svg";

function Proficiences() {
  const handleScroll = (event) => {
    event.preventDefault();

    const projectsContainer = document.getElementById("projects");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "12%",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
          }}
        >
          Explore client <br />
          and server-side <br />
        </h1>
        <h2 style={{ fontSize: "2.5rem" }} className="cta">
          capabilities
          <a href="#projects" onClick={handleScroll}>
            <img
              src={caret}
              alt="downward caret"
              style={{
                transform: "rotate(90deg)",
                margin: "6px",
                height: "42px",
                width: "42px",
              }}
            />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Proficiences;
