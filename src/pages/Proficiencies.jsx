import React, { useState, useEffect } from "react";
import LoadingSpinner from "../hooks/LoadingSpinner";
import Nav from "../components/NavBar";
import background2 from "../assets/project/background2.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import html from "../assets/project/html.svg";
// import css from "../assets/project/css.svg";
import javascript from "../assets/project/javascript.svg";
// import jquery from "../assets/project/jquery.svg";
// import node from "../assets/project/node.svg";
// import express from "../assets/project/express.svg";
import mysql from "../assets/project/mysql.svg";
import aws from "../assets/project/aws.svg";
import atlassian from "../assets/project/atlassian.svg";
// import mongodb from "../assets/project/mongodb.svg";
// import react from "../assets/project/react.svg";
// import graphql from "../assets/project/graphql.svg";
import python from "../assets/project/python.svg";
import docker from '../assets/project/docker.svg';
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
      description: "Interactivity and behavior on client and server sides.",
    },
    {
      src: python,
      alt: "Python",
      title: "Python",
      description: "Scripting, data processing, and automation with clarity.",
    },
    {
      src: mysql,
      alt: "MySQL",
      title: "MySQL",
      description: "Relational database with structured queries and joins.",
    },
    {
      src: aws,
      alt: "AWS",
      title: "AWS",
      description: "Cloud platform offering scalable compute, storage, and services.",
    },
    {
      src: docker,
      alt: "Docker",
      title: "Docker",
      description: "Platform for building, shipping, and running containers at scale."
    },
    {
      src: atlassian,
      alt: "Atlassian",
      title: "Atlassian",
      description: "Collaboration tools for code, projects, and team productivity.",
    },
        // {
    //   src: react,
    //   alt: "React",
    //   title: "React",
    //   description: "Component-based UI development with virtual DOM.",
    // },
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
    // {
    //   src: graphql,
    //   alt: "GraphQL",
    //   title: "GraphQL",
    //   description: "Query language for flexible APIs and data fetching.",
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
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="interact2">
            <h1 style={{ fontSize: "4rem" }}>Proficiencies</h1>
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
