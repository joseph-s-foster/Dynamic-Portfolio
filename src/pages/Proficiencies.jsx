import React, { useState, useEffect } from "react";
import LoadingSpinner from "../hooks/LoadingSpinner";
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
import SkillCards from "../components/SkillCards";
import Footer from "../components/Footer";
import "../SkillCards.css";

function Proficiencies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem(
      "hasVisitedProficienciesPageBefore"
    );
    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedProficienciesPageBefore", "true");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsContainer = document.getElementById("proficiencies");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const proficiencies = [
    {
      src: javascript,
      alt: "JavaScript",
      title: "JavaScript",
      description: "Interactivity and behavior on the front-end and back-end.",
    },
    {
      src: python,
      alt: "Python",
      title: "Python",
      description: "Scripting, data processing, and automation with clarity.",
    },
    {
      src: html,
      alt: "HTML",
      title: "HTML",
      description: "The foundation of web structure using semantic markup.",
    },
    {
      src: css,
      alt: "CSS",
      title: "CSS",
      description: "Styling with flexbox, grid, animations, and media queries.",
    },
    {
      src: react,
      alt: "React",
      title: "React",
      description: "Component-based UI development with virtual DOM.",
    },
    // {
    //   src: jquery,
    //   alt: "jQuery",
    //   title: "jQuery",
    //   description: "Simplified DOM manipulation and AJAX requests.",
    // },
    // {
    //   src: node,
    //   alt: "Node.js",
    //   title: "Node.js",
    //   description: "Server-side JavaScript with event-driven architecture.",
    // },
    // {
    //   src: express,
    //   alt: "Express.js",
    //   title: "Express.js",
    //   description: "Minimalist web framework for Node.js APIs and routing.",
    // },
    {
      src: mysql,
      alt: "MySQL",
      title: "MySQL",
      description: "Relational database with structured queries and joins.",
    },
    // {
    //   src: graphql,
    //   alt: "GraphQL",
    //   title: "GraphQL",
    //   description: "Query language for flexible APIs and data fetching.",
    // },
    // {
    //   src: handlebars,
    //   alt: "Handlebars",
    //   title: "Handlebars",
    //   description: "Logic-less templating for dynamic HTML content.",
    // },
    // {
    //   src: mongodb,
    //   alt: "MongoDB",
    //   title: "MongoDB",
    //   description: "NoSQL database using flexible document schemas.",
    // }
  ];

  return (
    <>
      <div>
        <Nav />
      </div>
      {isLoading && <LoadingSpinner />}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100svh",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="interact2">
            <h1 style={{ fontSize: "3rem" }}>Proficiencies</h1>
          </div>
          <a className="caret" href="#api" onClick={handleScroll}>
            <ChevronDownIcon className="w-8" aria-hidden="true" />
          </a>
        </div>
        <div id="proficiencies"></div>
        <div id="proficiencies" className="icons">
          {proficiencies.map((item) => (
            <SkillCards key={item.alt} src={item.src} alt={item.alt} title={item.title} description={item.description} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Proficiencies;
