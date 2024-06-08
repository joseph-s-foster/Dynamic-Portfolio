// Proficiencies.jsx
import React, { useState, useEffect } from "react";
import Nav from "../components/NavBar";
import background from "../assets/project/background.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import html from "../assets/project/html.svg";
import css from "../assets/project/css.svg";
import javascript from "../assets/project/javascript.svg";
import jquery from "../assets/project/jquery.svg";
import node from "../assets/project/node.svg";
import express from "../assets/project/express.svg";
import mysql from "../assets/project/mysql.svg";
import handlebars from "../assets/project/handlebars.svg";
import mongodb from "../assets/project/mongodb.svg";
import react from "../assets/project/react.svg";
import graphql from "../assets/project/graphql.svg";
import python from "../assets/project/python.svg";
import "../Proficiencies.css";
import LoadingSpinner from "../hooks/LoadingSpinner";

function Proficiencies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        const backgroundImage = div.style.backgroundImage.slice(5, -2);
        return new Promise((resolve) => {
          const img = new Image();
          img.src = backgroundImage;
          img.onload = resolve;
          img.onerror = resolve;
        });
      }
    );

    Promise.all([...imagePromises, ...backgroundPromises]).then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("proficiencies");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div>
        <Nav />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <Nav />
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
        <div className="interact2">
          <h1
            style={{
              fontSize: "3rem",
            }}
          >
            Proficiencies
          </h1>
        </div>
        <a className="caret" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
        </a>
      </div>
      <div id="proficiencies"></div>
      <div className="icons">
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={javascript} alt="JavaScript" />
        <img src={python} alt="Python" />
        <img src={jquery} alt="jQuery" />
        <img src={node} alt="Node.js" />
        <img src={express} alt="Express.js" />
        <img src={mysql} alt="MySQL" />
        <img src={handlebars} alt="Handlebars" />
        <img src={mongodb} alt="MongoDB" />
        <img src={react} alt="React" />
        <img src={graphql} alt="GraphQL" />
      </div>
    </>
  );
}

export default Proficiencies;
