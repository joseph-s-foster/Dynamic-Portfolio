import React from "react";
import background from "../assets/project/background.png";
import Project from "../components/Project";

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
              fontSize: "3rem",
            }}
          >
            <div style={{marginBottom: "12px"}}>
            Versatile
            <br/>
            Dynamic
            <br/>
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
        <h1 className="tags">
          {/* <div style={{ fontSize: "2rem", display: "inline-block" }}>|</div>{" "} */}
          Projects
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
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".6",
        }}
      ></div> */}

      {/* <div
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
              className="tile2"
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
      </div> */}
      {/* <div
      style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${background3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".6",
        }}>
       </div> */}
      <div style={{ paddingBottom: "1%" }}></div>
      {/* <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      > */}
      {/* <h1 className="tags">
          <div style={{ fontSize: "2rem", display: "inline-block" }}>|</div>{" "}
          RESPONSIVE
        </h1> */}
      {/* <div className="tiles">
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
        </div> */}
      {/* </div> */}
      {/* <div style={{ paddingBottom: "1%" }}></div> */}
      {/* <div
        style={{
          paddingLeft: "1%",
          paddingRight: "1%",
        }}
      >
      </div> */}
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
      name: "Tech Blog",
      description: "A JavaScript CRUD ops weblog",
      link: "https://t3ch-bl0g-5d6f38a434db.herokuapp.com/",
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

  // const projectsGroup2 = [
  //   {
  //     name: "JavaScript Quiz",
  //     description: "Test your knowledge",
  //     link: "https://joseph-s-foster.github.io/Coding-Quiz/",
  //     image: "quiz",
  //   },
  //   {
  //     name: "Weather Dashboard",
  //     description: "Search API forecasts",
  //     link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
  //     image: "weather",
  //   },
  //   {
  //     name: "Mischief Managed",
  //     description: "Experience session handling",
  //     link: "https://github.com/joseph-s-foster/Mischief-Managed",
  //     image: "tech",
  //   },
  //   {
  //     name: "Password Generator",
  //     description: "Generate random strings",
  //     link: "https://joseph-s-foster.github.io/Password-Generator/",
  //     image: "password",
  //   },
  // ];

  // const projectsGroup3 = [
  //   {
  //     name: "Timed JavaScript Quiz",
  //     description: "Test your knowledge",
  //     link: "https://joseph-s-foster.github.io/Coding-Quiz/",
  //     image: "quiz",
  //   },
  //   {
  //     name: "Password Generator",
  //     description: "Generate random strings",
  //     link: "https://joseph-s-foster.github.io/Password-Generator/",
  //     image: "password",
  //   },
  // ];

  return (
    <Component
      projectsGroup1={projectsGroup1}
      // projectsGroup2={projectsGroup2}
      // projectsGroup3={projectsGroup3}
    />
  );
}

export default Projects;