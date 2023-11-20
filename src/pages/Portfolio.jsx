import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statement in index.js
  const projects = [
    {
      name: "Weather Dashboard",
      description: "Search weather forecasts in a given location.",
      link: "https://joseph-s-foster.github.io/Weather-Dashboard/",
      repo: "https://github.com/joseph-s-foster/Weather-Dashboard",
      image: "flow",
    },
    {
      name: "Coding Quiz",
      description: "Test your Javascript knowledge.",
      link: "https://joseph-s-foster.github.io/Coding-Quiz/",
      repo: "https://github.com/joseph-s-foster/Coding-Quiz",
      image: "motion",
    },
    {
      name: "Password Generator",
      description: "Generate a random password up to 128 characters in length.",
      link: "https://github.com/joseph-s-foster/Password-Generator",
      repo: "https://joseph-s-foster.github.io/Password-Generator/",
      image: "sign",
    },
    {
      name: "Coming Soon",
      description: "A React application in the making.",
      link: "https://github.com/",
      repo: "https://github.com/",
      image: "screen",
    },
    {
      name: "Mischeif Managed",
      description: "A Harry Potter book series tracker with milestone-based trivia content.",
      link: "https://github.com/joseph-s-foster/Mischief-Managed",
      repo: "https://github.com/joseph-s-foster/Mischief-Managed",
      image: "angles",
    },
    {
      name: "Birdwatching Tennessee",
      description: "Discover birds in the state of Tennessee",
      link: "https://github.com/joseph-s-foster/Birdwatching-Tennessee",
      repo: "https://github.com/joseph-s-foster/Birdwatching-Tennessee",
      image: "twist",
    }
  ];

  // for each project, use the Project component to build a project
  return (
    <div className="container">
      <h1 className="text-center mb-4">Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={"project-" + project.name} className="col-md-6 col-lg-4 mb-4">
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
