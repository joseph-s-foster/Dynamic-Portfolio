import React, { useEffect } from "react";
import Project from "../components/Project";
import background from "../assets/project/background.png";
import background2 from "../assets/project/background2.png";
import background3 from "../assets/project/background3.png";
import caret from "../assets/project/caret.svg";

const Component = ({ projectsGroup1, projectsGroup2, projectsGroup3 }) => {
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
        <div className="interact2">
          <h1
            style={{
              fontSize: "2.5rem",
            }}
          >
            Explore individual
            <br />
            and collaborative
          </h1>
          <h2 style={{ fontSize: "2.5rem" }} className="cta">
            projects
            <a href="#projects" onClick={handleScroll}>
              <img
                src={caret}
                alt="downward caret"
                style={{
                  transform: "rotate(90deg)",
                  margin: "6px",
                  height: "42px",
                  width: "42px",
                }}
              />
            </a>
          </h2>
        </div>
      </div>
      <div id="projects"></div>
      <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      >
        <h1 className="tags">
          <div style={{ fontSize: "2rem", display: "inline-block" }}>|</div>{" "}
          VERSATILE
        </h1>
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
      <div
      style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".6",
        }}>
       </div>

      <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      >
        <h1 className="tags">
          <div style={{ fontSize: "2rem", display: "inline-block" }}>|</div>{" "}
          DYNAMIC
        </h1>
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
      <div
      style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${background3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".5",
        }}>
       </div>
      <div style={{ paddingBottom: "1%" }}></div>
      <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      >
        <h1 className="tags">
          <div style={{ fontSize: "2rem", display: "inline-block" }}>|</div>{" "}
          RESPONSIVE
        </h1>
        <div className="tiles">
          {projectsGroup3.map((project) => (
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
      <div style={{ paddingBottom: "1%" }}></div>
      <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      >
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
      name: "Salient Solutions",
      description: "A C# employee badge maker",
      link: "https://github.com/joseph-s-foster/CSharp-Badge-Maker",
      image: "coffee",
    },
  ];

  const projectsGroup2 = [
    {
      name: "Python Pulse",
      description: "A Python CRUD/Rest newsfeed",
      link: "https://python-pulse-a33bae0b4181.herokuapp.com/",
      image: "pulse",
    },
    {
      name: "Weather Dashboard",
      description: "Search forecasts",
      link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
      image: "weather",
    },
  ];

  const projectsGroup3 = [
    {
      name: "Timed JavaScript Quiz",
      description: "Test your knowledge",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
      image: "quiz",
    },
    {
      name: "Password Generator",
      description: "Generate random strings",
      link: "https://joseph-s-foster.github.io/Password-Generator/",
      image: "password",
    },
  ];

  return (
    <Component
      projectsGroup1={projectsGroup1}
      projectsGroup2={projectsGroup2}
      projectsGroup3={projectsGroup3}
    />
  );
}

export default Projects;
