import React, { useEffect } from "react";
import Project from "../components/Project";
import background from "../assets/project/background.png";
import caret from "../assets/project/caret.svg";

const Component = ({ projectsGroup1, projectsGroup2 }) => {
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
                src={caret}
                alt="downward caret"
                style={{
                  transform: 'rotate(90deg)',
                  margin: "6px",
                  height: "42px",
                  width: "42px",
                }}
              />
            </a>
          </h2>
        </div>
      </div>
      <div className="container" id="projects" style={{
        paddingTop: "2%",
      }}>
      <h1 className="tags">Versatile</h1>
      <h2 className="tags2">Exercising a myriad of proficiencies through multilple languages.</h2>
        <div className="tiles">
          {projectsGroup1.map((project) => (
            <div
              key={"project-" + project.name}
              id={"project-" + project.image}
              className="tile"
            >
              <Project project={project} />
              <img
                loading="lazy"
                src={`/assets/projects/${project.image}.png`}
                alt={project.description}
                style={{ display: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
      <h1 className="tags">Dynamic</h1>
      <h2 className="tags2">Providing real-time updates and user interactivity.</h2>
        <div className="tiles">
        {projectsGroup2.map((project) => (
            <div
              key={"project-" + project.name}
              id={"project-" + project.image}
              className="tile"
            >
              <Project project={project} />
              <img
                loading="lazy"
                src={`/assets/projects/${project.image}.png`}
                alt={project.description}
                style={{ display: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
      <h1 className="tags">Responsive</h1>
      <h2 className="tags2">Ensuring consistent experiences across numerous devices and viewports.</h2>
      </div>
    </>
  );
};

function Projects() {
  const projectsGroup1 = [
    {
      name: "Would You Rather",
      description: "A MERN stack polling application",
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      image: "wyr",
    },
    {
      name: "Python Pulse",
      description: "A Python CRUD/Rest newsfeed",
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

  const projectsGroup2 = [
    {
      name: "Password Generator",
      description: "Create random passwords",
      link: "https://joseph-s-foster.github.io/Password-Generator/",
      image: "password",
    },
    {
      name: "Weather Dashboard",
      description: "Search forecasts",
      link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
      image: "weather",
    },
    {
      name: "Timed JavaScript Quiz",
      description: "Test your knowledge",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
      image: "quiz",
    },
  ];

  return <Component projectsGroup1={projectsGroup1} projectsGroup2={projectsGroup2} />;
}

export default Projects;