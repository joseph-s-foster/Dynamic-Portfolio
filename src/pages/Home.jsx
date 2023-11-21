import Project from "../components/Project";

function Home() {
  const projects = [
    {
      description: "Full-Stack Developer",
      image: "avatar",
    },
  ];

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

export default Home;
