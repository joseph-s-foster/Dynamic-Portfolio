import useScrollReveal from "../hooks/useScrollReveal";
import "../ProjectCards.css";

function ProjectCards({ link, src, alt, title, description, language }) {

  useScrollReveal();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card reveal">
      <div className="project-icon-wrapper">
      <img className="project-icon" src={src} alt={alt} />
      </div>
      <div className="project-text">
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        <p className="project-language">{language}</p>
      </div>
    </a>
  );
}

export default ProjectCards;
