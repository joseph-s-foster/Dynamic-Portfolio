import React, { useState, useEffect } from "react";
import '../Proficiencies.css' 
import background from "../assets/project/background.png";

function Proficiences() {
  return (
    <>
      <div
        style={{
<<<<<<< HEAD
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative", // Make sure it's positioned relative
=======
          position: "absolute",
          bottom: "40%",
          left: "12%",
>>>>>>> parent of 1cc9e0b (setting up proficiencies content)
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
            <a href="#icons" onClick={handleScroll}>
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
      <div className="icons" id="icons">
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={javascript} alt="JavaScript" />
        <img src={jquery} alt="jQuery" />
        <img src={node} alt="Node.js" />
        <img src={express} alt="Express.js" />
        <img src={mysql} alt="MySQL" />
        <img src={handlebars} alt="Handlebars" />
        <img src={mongodb} alt="MongoDB" />
        <img src={react} alt="React" />
        <img src={graphql} alt="GraphQL" />
        <img src={python} alt="Python" />
      </div>
    </>
  );
}

export default Proficiencies;
