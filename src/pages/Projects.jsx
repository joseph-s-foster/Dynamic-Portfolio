import React, { useEffect } from "react";
import Project from "../components/Project";
import background from "../assets/project/background.png";
import caret90 from "../assets/project/caret90.svg";

const Component = ({ projects }) => {
  const handleScroll = (event) => {
    event.preventDefault();

    const projectsContainer = document.getElementById("projects");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: "smooth" });
    }
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
            Explore individual 
            <br />and collaborative
          </h1>
          <h2 style={{ fontSize: "2.5rem" }} className="cta">
            projects
            <a href="#projects" onClick={handleScroll}>
              <img
                src={caret90}
                alt="downward caret"
                style={{
                  margin: "8px",
                  height: "42px",
                  width: "42px",
                }}
              />
            </a>
          </h2>
        </div>
      </div>
      <div className="container" id="projects">
        <div className="tiles">
          {projects.map((project) => (
            <div
              key={"project-" + project.name}
              id={"project-" + project.image}
              className="tile"
            >
              <Project project={project} />
              <img
                loading="lazy"
                src={`/assets/projects/${project.image}.png`}
                alt={project.name}
                style={{ display: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function Projects() {
  const projects = [
    {
      name: "Would You Rather",
      description: "A MERN stack polling application",
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      image: "angles",
    },
    {
      name: "Python Pulse",
      description: "A Python CRUD/REST newsfeed",
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      image: "flow",
    },
    {
      name: "Weather Dashboard",
      description: "Search forecasts via weather API",
      link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
      image: "motion",
    },
    {
      name: "Timed JavaScript Quiz",
      description: "Data manipulation and localStorage coalesce",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
      image: "sign",
    },
  ];

  // for each project, use the Project component to build a project
  return <Component projects={projects} />;
}

export default Projects;
