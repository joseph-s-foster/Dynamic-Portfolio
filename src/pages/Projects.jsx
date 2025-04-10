import React, { useState, useEffect } from "react";
import useScrollReveal from "../hooks/reveal.js";
import LoadingSpinner from "../hooks/LoadingSpinner";
import Nav from "../components/NavBar";
import background from "../assets/project/background.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Component = ({ projectsGroup1 }) => {

  useScrollReveal();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem(
      "hasVisitedProjectsPageBefore"
    );

    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedProjectsPageBefore", "true");
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
            <h1 style={{ fontSize: "3rem" }}>Projects</h1>
          </div>
          <a className="caret" href="#api" onClick={handleScroll}>
            <ChevronDownIcon className="w-8" aria-hidden="true" />
          </a>
        </div>
        <div id="projects"></div>
        <div>
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
          <div className="profdesc">
            <h3 style={{ marginBottom: "8px" }}>
              Skills in multiple languages.
            </h3>
            <div>
              <span
                onClick={handleViewProficienciesClick}
                style={{
                  padding: "12px",
                  fontSize: "1rem",
                  border: "solid #dddddd 2px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                className="explore"
              >
                View proficiencies
              </span>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "1%" }}></div>
        <Footer />
      </div>
    </>
  );
};

function Projects() {
  const projectsGroup1 = [
    {
      name: "Would You Rather",
      description: "A MERN stack polling app",
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      image: "wyr",
    },
    {
      name: "Classic Snake",
      description: "Mobile gaming nostalgia",
      link: "https://joseph-s-foster.github.io/Classic-Snake/",
      image: "blog",
    },
    {
      name: "Python Pulse",
      description: "A Python CRUD ops newsfeed",
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      image: "pulse",
    },
    {
      name: "Salient Solutions",
      description: "A C# employee badge maker",
      link: "https://github.com/joseph-s-foster/CSharp-Badge-Maker",
      image: "coffee",
    },
  ];

  return <Component projectsGroup1={projectsGroup1} />;
}

export default Projects;
