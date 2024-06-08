// Projects.jsx
import React, { useState, useEffect } from "react";
import Nav from "../components/NavBar";
import background from "../assets/project/background.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Project from "../components/Project";
import LoadingSpinner from "../hooks/LoadingSpinner";

const Component = ({ projectsGroup1 }) => {
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
    const projectsContainer = document.getElementById("projects");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProficienciesClick = () => {
    window.location.href = "/proficiencies";
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
            Projects
          </h1>
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
              className="tile"
            >
              <Project project={project} />
            </div>
          ))}
        </div>
        <div className="profdesc">
          <h3
            style={{
              marginBottom: "8px",
            }}
          >
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
      name: "Coding Quiz",
      description: "A timed JavaScript exercise",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
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
