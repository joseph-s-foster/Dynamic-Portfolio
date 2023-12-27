import * as projects from '../assets';
import '../Portfolio.css'

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  return (
    <a href={link} className="project-link">
      <div className="">
        <div className="project-content">
          <div className="project-info">
            <h1>
            {name}
            </h1>
            <div>{description}</div>
          </div>
          <div className="github-link">
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </a>
  );  
}

export default Project;
