import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statement in index.js
  const projects = [
    {
      description: "Full-Stack Developer",
      image: "avatar",
    },
    // Add more projects as needed
  ];

  // for each project, use the Project component to build a project
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column vh-50">
        {projects.map((project, index) => (
          <div key={"project-" + index} className="col-md-6 col-lg-4 mb-4">
            <Project project={project} className="mx-auto" />
          </div>
        ))}
    </div>
  );
}

export default Portfolio;

