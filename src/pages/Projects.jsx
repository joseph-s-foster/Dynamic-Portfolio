import React, { useEffect } from "react";
import Project from "../components/Project";
import background from "../assets/project/background.png"

function Projects() {

  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statement in index.js
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
          Continue scrolling <br />to explore.
        </h1>
        <h2 style={{ fontSize: "1.5rem" }}>&nbsp;</h2>
      </div>
    </div>
    <div className="container">
      <div className="tiles">
        {projects.map((project) => (
          <div key={"project-" + project.name} id={"project-" + project.image} className="tile">
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
}

export default Projects;
