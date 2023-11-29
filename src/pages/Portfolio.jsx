import Project from "../components/Project";

function Portfolio() {
  
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statement in index.js
  const projects = [
    {
      name: "Weather Dashboard",
      description: "Search weather forecasts",
      link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
      repo: "https://github.com/joseph-s-foster/Weather-Dashboard",
      image: "flow",
    },
    {
      name: "Coding Quiz",
      description: "Test your Javascript knowledge",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
      repo: "https://github.com/joseph-s-foster/Coding-Quiz",
      image: "motion",
    },
    {
      name: "Password Generator",
      description: "Generate a random password",
      link: "https://joseph-s-foster.github.io/Password-Generator/",
      repo: "https://github.com/joseph-s-foster/Password-Generator",
      image: "sign",
    },
    {
      name: "Coming Soon",
      description: "A React application in the making",
      link: "https://github.com/",
      repo: "https://github.com/",
      image: "screen",
    },
    {
      name: "Mischeif Managed",
      description: "A Harry Potter book series tracker",
      link: "https://github.com/joseph-s-foster/Mischief-Managed",
      repo: "https://github.com/joseph-s-foster/Mischief-Managed",
      image: "angles",
    },
    {
      name: "Birdwatching Tennessee",
      description: "Discover birds in Tennessee",
      link: "https://github.com/joseph-s-foster/Birdwatching-Tennessee",
      repo: "https://github.com/joseph-s-foster/Birdwatching-Tennessee",
      image: "twist",
    }
  ];

  // for each project, use the Project component to build a project
  return (
    <div className="container">
      <h1 className="text-center mb-4">Projects</h1>
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
