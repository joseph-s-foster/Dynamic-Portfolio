import "../Portfolio.css";

function Project({ project }) {
  const { name, link, description, image } = project;

  return (
    <div className="project-content">
      <div className="project-info">
        <h1>{name}</h1>
        <div className="project-description">{description}</div>
      </div>
      <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
        Explore ›
      </a>
    </div>
  );
}

export default Project;
