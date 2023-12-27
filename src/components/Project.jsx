import "../Portfolio.css";

function Project({ project }) {
  const { name, link, description} = project;

  return (
    <a href={link} className="project-link">
      <div className="project-content">
        <div className="project-info">
          <h1>{name}</h1>
          <div className="project-description">{description}</div>
        </div>
        {/* <div className="github-link">
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </div> */}
      </div>
    </a>
  );
}

export default Project;
