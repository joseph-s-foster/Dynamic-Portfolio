import Project from "../components/Project";

function Portfolio() {
  
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statement in index.js
  const projects = [
    {
      name: "Would You Rather?",
      description: "Real-time polls",
      link: "https://wyr-3b5b304bab70.herokuapp.com/",
      image: "angles",
    },
    {
      name: "Weather Dashboard",
      description: "Search weather forecasts",
      link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
      image: "flow",
    },
    {
      name: "Coding Quiz",
      description: "Test your Javascript knowledge",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
      image: "motion",
    },
    {
      name: "Password Generator",
      description: "Generate a random password",
      link: "https://joseph-s-foster.github.io/Password-Generator/",
      image: "sign",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div className="container">
      <h1 className="text-center mb-4"
      style={{fontSize: "2rem"}}>Projects</h1>
      <div className="tiles">
        {projects.map((project) => (
          <div key={"project-" + project.name} id={"project-" + project.image} className="tile">
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
