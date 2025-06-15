import { useState, useEffect, useLayoutEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useScrollReveal from "../hooks/reveal.js";
import LoadingSpinner from "../hooks/LoadingSpinner";
import Nav from "../components/NavBar";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Component = ({ projectsGroup1 }) => {
  useScrollReveal();

  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const tag1 = "Scalable";
  const tag2 = "Modular";
  const tag3 = "Interactive";

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
    const projectsContainer = document.getElementById("projects");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProficienciesClick = () => {
    window.location.href = "/proficiencies";
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      {isLoading && <LoadingSpinner />}
      <div className="background">
        <div className="hero">
          <h1 style={{ fontSize: "4rem", paddingBottom: "4px" }}>Projects</h1>
          <h2 style={{ fontSize: "2rem" }}>
            {typedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
        </div>
        <a className="caret" href="#api" onClick={handleScroll}>
          <ChevronDownIcon className="w-8" aria-hidden="true" />
        </a>
      </div>
      <div id="projects">
        <div className="tiles">
          {projectsGroup1.map((project) => (
            <div
              key={"project-" + project.name}
              id={"project-" + project.image}
              className="tile reveal"
            >
              <Project project={project} />
            </div>
          ))}
        </div>
        <div className="summary">
          <h3>Hooks and Local Storage</h3>
          <p>
            Each tile is animated using a custom React hook and features a call
            to action for project exploration. Local storage detects first-time
            visits and adjust the loader delay for a smoother user experience.
          </p>
          <div>
            <span onClick={handleViewProficienciesClick} className="explore">
              View proficiencies
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function Projects() {
  const projectsGroup1 = [
    {
      name: "CLASSIC SNAKE",
      description: "Mobile gaming nostalgia",
      language: ".js",
      link: "https://joseph-s-foster.github.io/Classic-Snake/",
      image: "blog",
    },
    {
      name: "WYR",
      description: "MERN stack polling",
      language: ".jsx",
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      image: "wyr",
    },
    {
      name: "PYTHON PULSE",
      description: "CRUD ops newsfeed",
      language: ".py",
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      image: "pulse",
    },
    // {
    //   name: "SALIENT SOLUTIONS",
    //   description: "ID Generator",
    //   language: ".cs",
    //   link: "https://github.com/joseph-s-foster/CSharp-Badge-Maker",
    //   image: "coffee",
    // },
  ];

  return <Component projectsGroup1={projectsGroup1} />;
}

export default Projects;
