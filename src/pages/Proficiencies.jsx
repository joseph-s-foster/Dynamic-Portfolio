import { useState, useEffect, useLayoutEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import LoadingSpinner from "../hooks/LoadingSpinner";
import Nav from "../components/NavBar";
import SkillCards from "../components/SkillCards";
import javascript from "../assets/project/javascript.svg";
import mysql from "../assets/project/mysql.svg";
import aws from "../assets/project/aws.svg";
import atlassian from "../assets/project/atlassian.svg";
import python from "../assets/project/python.svg";
import docker from "../assets/project/docker.svg";
import Footer from "../components/Footer";
import "../SkillCards.css";

function Proficiencies() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const tag1 = "Collaborative";
  const tag2 = "Agile";
  const tag3 = "Adaptive";

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  useLayoutEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedHomePageBefore");

    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedHomePageBefore", "true");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const typeAndBackspace = async () => {
      const cursorFlashInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < tag1.length; i++) {
        setTypedText((prevText) => prevText + tag1[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = tag1.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < tag2.length; i++) {
        setTypedText((prevText) => prevText + tag2[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = tag2.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < tag3.length; i++) {
        setTypedText((prevText) => prevText + tag3[i]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = tag3.length; i >= 0; i--) {
        setTypedText((prevText) => prevText.slice(0, -1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      clearInterval(cursorFlashInterval);

      // Repeat the process
      typeAndBackspace();
    };

    typeAndBackspace();
  }, [tag1]);

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
      description:
        "Cloud platform offering scalable compute, storage, and services.",
    },
    {
      src: docker,
      alt: "Docker",
      title: "Docker",
      description:
        "Platform for building, shipping, and running containers at scale.",
    },
    {
      src: atlassian,
      alt: "Atlassian",
      title: "Atlassian",
      description:
        "Collaboration tools for code, projects, and team productivity.",
    },
  ];

  const handleViewProjectsClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      {isLoading && <LoadingSpinner />}
      <div className="background">
        <div className="hero">
          <h1 style={{ fontSize: "4rem", paddingBottom: "4px" }}>
            Proficiencies
          </h1>
          <h2 style={{ fontSize: "2rem" }}>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a className="caret" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
        </a>
      </div>
      <div id="proficiencies" className="icons">
        {proficiencies.map((item) => (
          <SkillCards
            key={item.alt}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="summary">
        <h3>Core Technologies</h3>
        <p>
          Versatility across front-end, back-end, and cloud environments — from
          scripting and application design to containerized deployments and
          agile team workflows.
        </p>
        <div>
          <span onClick={handleViewProjectsClick} className="explore">
            Homepage
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Proficiencies;
