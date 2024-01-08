import React, { useEffect } from "react";
import Project from "../components/Project";

function Portfolio() {
  useEffect(() => {
    // Remove overflow hidden when the component mounts
    document.body.style.overflow = "auto";

    // Reapply overflow hidden when the component unmounts (cleanup)
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

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
    <div className="container">
      <h1 className="text-center mb-4" style={{ fontSize: "2.5rem" }}>
        Projects
      </h1>
      <div className="tiles">
        {projects.map((project) => (
          <div key={"project-" + project.name} id={"project-" + project.image} className="tile">
            <Project project={project} />
            <img
              loading="lazy" // Enable lazy loading
              src={`/assets/projects/${project.image}.jpg`} // Assuming the images are in the assets/projects folder and are in JPG format
              alt={project.name}
              style={{ display: "none" }} // Hide the images initially to avoid flickering
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
