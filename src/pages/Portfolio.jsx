import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statement in index.js
  const projects = [
    {
      name: "Weather Dashboard",
      description: "Search weather forecasts for a given location.",
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
      link: "https://heroku.com",
      repo: "https://github.com/femke77",
      image: "screen",
    },
    {
      name: "Mischeif Managed",
      description: "A Harry Potter book series tracker with milestone-based trivia content.",
      link: "https://heroku.com/",
      repo: "https://github.com/femke77",
      image: "angles",
    }
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <h1>Projects</h1>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
