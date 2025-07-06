import useScrollReveal from "../hooks/useScrollReveal";
import "../SkillCards.css";

function SkillCards({ link, src, alt, title, description }) {

  useScrollReveal();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="skill-card reveal">
      <img className="skill-icon" src={src} alt={alt} />
      <div className="skill-text">
        <p className="skill-title">{title}</p>
        <p className="skill-description">{description}</p>
      </div>
    </a>
  );
}

export default SkillCards;
