import React from "react";
import background from "../assets/project/background.png";
import Project from "../components/Project";

const Component = ({ projectsGroup1 }) => {
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
              fontSize: "3rem",
            }}
          >
            <div style={{ marginBottom: "12px" }}>
              Versatile
              <br />
              Dynamic
              <br />
              Reponsive
              <br />
            </div>
            <a href="#projects" onClick={handleScroll}>
              <span
                style={{
                  padding: "12px",
                  fontSize: "1.25rem",
                  border: "solid #dddddd 2px",
                  borderRadius: "6px",
                }}
                className="explore"
              >
                Explore
              </span>
            </a>
          </h1>
        </div>
      </div>
      <div id="projects"></div>
      <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      >
        <h1 className="tags">Projects</h1>
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
